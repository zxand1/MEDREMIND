import React, { useState, useCallback } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

export default function HistoricPage() {
  const [historyData, sethistoryData] = useState<CardProps[]>([]);
  const { getItem, setItem } = useAsyncStorage("@medremind:ingeridos");

  async function handleFetchData() {
    const response = await getItem();
    sethistoryData(response ? JSON.parse(response) : []);
  }

  async function handleRemove(id: string) {
    const response = await getItem();
    const previoushistoryData = response ? JSON.parse(response) : [];
    const newhistoryData = previoushistoryData.filter(
      (item: CardProps) => item.id !== id
    );

    setItem(JSON.stringify(newhistoryData));
    sethistoryData(newhistoryData);
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  type CardProps = {
    id: string;
    medname: string;
    tipo: string;
    time: string;
    hora: string;
    intervalo:string
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
          <Text style={styles.title}>Historico de Medicamentos:</Text>
          <FlatList
            data={historyData}
            style={{ marginTop: 10 }}
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <LinearGradient
                  colors={["#110e9d", "#2e84c1"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.submitBtnBackground}
                >
                  <View style={styles.submitBtn}>
                    <Text style={styles.text1}>Medicação: {item.medname}</Text>
                    <Text style={styles.text2}>Tipo: {item.tipo}</Text>
                    <Text style={styles.text2}>
                      Intervalo: {item.intervalo} em {item.intervalo} horas
                    </Text>
                    <TouchableOpacity onPress={() => handleRemove(item.id)}>
                      <View style={styles.submiticon2}>
                        <FontAwesome5 name="trash" size={20} color="white" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              );
            }}
          ></FlatList>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
