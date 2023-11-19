import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

export default function NewRegistrationPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const handleTimeChange = (event, time) => {
    if (time !== undefined) {
      setSelectedTime(time);
    }
    setShowTimePicker(false);
  };

  const formatSelectedDate = () => {
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();
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
                placeholder={{ label: 'Selecione o tipo', value: null }}
                onValueChange={(value) => console.log(value)}
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
              style={[styles.formInput]}
              placeholder="Digite o nome do medicamento"
            />

            <Text style={styles.text}>Selecione o intervalo entre doses:</Text>
            <View style={styles.select}>
              <RNPickerSelect
                placeholder={{ label: 'Selecione o intervalo', value: null }}
                onValueChange={(value) => console.log(value)}
                items={[
                  { label: '2 horas', value: '2' },
                  { label: '4 horas', value: '4' },
                  { label: '8 horas', value: '8' },
                  { label: '10 horas', value: '10' },
                  { label: '12 horas', value: '12' },
                ]}
              />
            </View>
            <Text style={styles.text}>Informe a data e hora da primeira dose:</Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.datePickerButton}
            >
              <Text>{formatSelectedDate()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
              />
            )}

            
            {/* Campo de Hora */}
            <TouchableOpacity
              onPress={() => setShowTimePicker(true)}
              style={styles.datePickerButton}
            >
              <Text>{selectedTime.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleTimeChange}
              />
            )}

              
            <View style={styles.submitBtn}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => NewRegistrationPage()}
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
