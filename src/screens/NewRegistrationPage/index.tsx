import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import styles from './styles';
import uuid from 'react-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import Toast from "react-native-toast-message";
import * as Notifications from 'expo-notifications';
import { useNavigation } from "@react-navigation/native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

export default function NewRegistrationPage() {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setSelectedDate] = useState(new Date());
  const [errorDate, setErrorDate] = useState(null);
  const [time, setSelectedTime] = useState(new Date());
  const [errorTime, setErrorTime] = useState(null);
  const [medname, setmedname] = useState("");
  const [errorMedname, setErrorMedname] = useState(null);
  const [tipo, setTipo] = useState("");
  const [errorTipo, setErrorTipo] = useState(null);
  const [intervalo, setIntervalo] = useState("");
  const [errorIntervalo, setErrorIntervalo] = useState(null);

  const { getItem, setItem } = useAsyncStorage("@medremind:medname");
  const navigation = useNavigation();

  async function handleNew() {
    if (!tipo) {
      Alert.alert('Calma aí!', "Tipo de Medicamento não Preenchido");
      return
    }

    if (!medname) {
      Alert.alert('Calma aí!', "Nome do Medicamento não Preenchido");
      return
    }

    if (!intervalo) {
      Alert.alert('Calma aí!', "Intervalo não Preenchido");
      return
    }

    try {
      const id = uuid();
      const newData = {
        id,
        medname,
        intervalo,
        tipo,
        date,
        time,
      }

      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData];

      await setItem(JSON.stringify(data));

      Toast.show({
        type: "success",
        text1: "Cadastrado com sucesso!",
      })

      setTipo("");
      setmedname("");
      setIntervalo("");
      setSelectedDate(new Date());
      setSelectedTime(new Date());
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "não foi possível cadastrar."
      })
    }
  }

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const handleTimeChange = (event: DateTimePickerEvent, date?: Date) => {
    if (date !== undefined) {
      setSelectedTime(date);
    }
    setShowTimePicker(false);
  };


  const formatSelectedDate = () => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/wallpaper.png')}
      style={styles.imageBackground}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.logoTitle}>
          <Animatable.Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logoImage}
            animation="rotate"
            iterationCount="infinite"
            duration={3800}
            direction="alternate-reverse"
          />
          <Text style={styles.logoText}>Med</Text>
          <Text style={styles.logoText}>Remind</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Cadastrar Novo Medicamento:</Text>
          <ScrollView>
            <Text style={styles.text}>Selecione o tipo de medicamento:</Text>
            <View style={styles.select}>
              <RNPickerSelect
                value={tipo}
                placeholder={{ label: 'Selecione o tipo', value: null }}
                onValueChange={setTipo}
                items={[
                  { label: 'Comprimidos', value: 'Comprimidos' },
                  { label: 'Dosagem', value: 'Dosagem' },
                  { label: 'Injetável', value: 'Injetável' },
                  { label: 'Gotas', value: 'Gotas' },
                  { label: 'Pomadas', value: 'Pomadas' },
                ]}
              />
            </View>
            <Text style={styles.text}>Nome do medicamento:</Text>
            <TextInput
              style={[
                styles.formInput]}
              value={medname}
              onChangeText={setmedname}
              placeholder="Digite o nome do medicamento"
            />
            <Text style={styles.text}>Selecione o intervalo entre doses:</Text>
            <View style={styles.select}>
              <RNPickerSelect
                value={intervalo}
                placeholder={{ label: 'Selecione o intervalo', value: null, }}
                onValueChange={setIntervalo}
                items={[
                  { label: '2 horas', value: '2' },
                  { label: '4 horas', value: '4' },
                  { label: '6 horas', value: '6' },
                  { label: '8 horas', value: '8' },
                  { label: '10 horas', value: '10' },
                  { label: '12 horas', value: '12' },
                  { label: '24 horas', value: '24' },
                ]}
              />
            </View>
            <Text style={styles.text}>Informe a data e hora da primeira dose:</Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.datePickerButton}
            >
              <Text>{formatSelectedDate()}</Text>
            </TouchableOpacity >
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
                timeZoneOffsetInMinutes={Platform.OS === 'android' ? 0 : undefined}
              />
            )}
            {/* Campo de Hora */}
            <TouchableOpacity
              onPress={() => setShowTimePicker(true)}
              style={styles.datePickerButton}
            >
              <Text>{time.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleTimeChange}
                timeZoneOffsetInMinutes={Platform.OS === 'android' ? 0 : undefined}
              />
            )}
            <View style={styles.submitBtn}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleNew();
                  navigation.navigate("Tabnavigation");
                }
                }
              >
                <LinearGradient
                  colors={['#110e9d', '#2e84c1']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.submitBtnBackground}
                >
                  <Text style={styles.submitText}>Salvar</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
