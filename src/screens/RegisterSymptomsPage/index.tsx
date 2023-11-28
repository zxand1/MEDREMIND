import React, { useState } from "react";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import uuid from "react-uuid";

import styles from "./styles";

export default function RegisterSymptoms() {
  const navigation = useNavigation();

  const [time, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [registro, setRegistro] = useState("");
  const [date, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { getItem, setItem } = useAsyncStorage("@medremind:registro");

  async function handleNew() {
    try {
      const id = uuid();
      const newData = {
        id,
        registro,
        date,
      };

      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData];
      console.log(data);
      await setItem(JSON.stringify(data));
      Toast.show({
        type: "success",
        text1: "Registro salvo com sucesso!",
      });
    } catch (error) {
      console.log(error);

      Toast.show({
        type: "error",
        text1: "não foi possível registrar.",
      });
    }
  }

  const handleDateChange = (event: DateTimePickerEvent, newDate?: Date) => {
    if (newDate !== undefined) {
      setSelectedDate(date);
    }

    setShowDatePicker(false);
  };

  const handleTimeChange = (event: DateTimePickerEvent, newDate?: Date) => {
    if (newDate !== undefined) {
      setSelectedTime(newDate);
    }

    setShowTimePicker(false);
  };

  const formatSelectedDate = () => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/wallpaper.png")}
      style={styles.imageBackground}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.logoTitle}>
          <Animatable.Image
            source={require("../../../assets/images/logo.png")}
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
          <Text style={styles.title}>Cadastrar Novo sintoma:</Text>
          <ScrollView>
            <TextInput
              style={[styles.formInput]}
              value={registro}
              onChangeText={setRegistro}
              multiline={true}
              placeholder="registre aqui seus sintoma:"
            />

            <Text style={styles.text}>Informe a data e hora do sintoma:</Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.datePickerButton}
            >
              <Text>{formatSelectedDate()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
                timeZoneOffsetInMinutes={Platform.OS === "android" ? 0 : undefined}
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
                timeZoneOffsetInMinutes={Platform.OS === "android" ? 0 : undefined}
              />
            )}
            <View style={styles.submitBtn}>
              <TouchableOpacity style={styles.button} onPress={handleNew}>
                <LinearGradient
                  colors={["#110e9d", "#2e84c1"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.submitBtnBackground}
                >
                  <Text style={styles.submitText}>Salvar</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.submitBtn2}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("Tabnavigation");
                }}
              >
                <LinearGradient
                  colors={["#110e9d", "#2e84c1"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.submitBtnBackground}
                >
                  <Text style={styles.submitText}>Voltar</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
