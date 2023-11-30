import React, { useState, useCallback } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { Linking } from 'react-native';

import styles from "./styles";

type CardProps = {
  id: string;
  registro: string;
  date: string;
};

export default function HelpSupport() {
  const navigation = useNavigation();

  const [data, setData] = useState<CardProps[]>([]);
  const { getItem, setItem } = useAsyncStorage("@medremind:registro");

  async function handleFetchData() {
    const response = await getItem();

    setData(response ? JSON.parse(response) : []);
  }

  async function handleRemove(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const newData = previousData.filter((item: CardProps) => item.id !== id);

    setItem(JSON.stringify(data));
    setData(newData);
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

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
          <Text style={styles.title}>Clique no Email abaixo para entrar em contato com nosso setor de suporte:</Text>

            <Text style={styles.title2}> suporte@medremind.com.br</Text>
              
          <FlatList
            data={data}
            style={{ marginTop: 5 }}
            contentContainerStyle={{ marginHorizontal: 20 }}
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
                    <Text style={styles.text1}>Sitomas: {item.registro}</Text>
                    <Text style={styles.text3}>Data : {item.date} </Text>
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

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
