import { Text, View, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";
import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from "@react-navigation/native"
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function HistoricPage() {
  const [historyData, sethistoryData] = useState<CardProps[]>([]);
  const { getItem, setItem } = useAsyncStorage("@medremind:ingeridos");

  async function handleFetchData() {
    const response = await getItem();
    const historyData = response ? JSON.parse(response) : [];
    sethistoryData(historyData);
  }

  async function handleRemove(id: string) {
    const response = await getItem();
    const previoushistoryData= response ? JSON.parse(response) : [];
    const newhistoryData = previoushistoryData.filter((item: CardProps) => item.id !== id);
    setItem(JSON.stringify(newhistoryData));
    sethistoryData(newhistoryData);
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));

  type CardProps = {
    id: string;
    medname: string,
    tipo: string,
    hora: string,
  }

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
          <Text style={styles.title}>Medicamentos Cadastrados:</Text>
          <FlatList
            data={historyData}
            style={{ marginTop: 5 }}
            contentContainerStyle={{ marginHorizontal: 20 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <LinearGradient
                  colors={["#110e9d", "#2e84c1"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.submitBtnBackground}>
                  <View style={styles.submitBtn}>
                    <Text style={styles.text1}>Medicação: {item.medname}</Text>
                    <Text style={styles.text2}>Tipo: {item.tipo}</Text>
                    <Text style={styles.text2}>Intervalo: {item.hora} em {item.hora} horas</Text>
                    <TouchableOpacity onPress={() => handleRemove(item.id)}>
                      <View style={styles.submiticon2}>
                        <AntDesign name="delete" size={25} color="white" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              )
            }}
          ></FlatList>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
