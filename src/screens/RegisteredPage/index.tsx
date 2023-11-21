import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'
import styles from "./styles";
import React, { useState , useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from "react-native-gesture-handler";
export default function RegisteredPage() {
  const [data, setData]= useState<CardProps[]>([]);

  async function handleFetchData(){
    const response = await AsyncStorage.getItem("@medremind:medname");
    const data = response ? JSON.parse(response) : {};
    console.log((data));
  }

  useEffect(()=>{
    handleFetchData();
  })

  //export type CardProps={
   // id: string;
  //  medname:string,
  //  tipo:string,
  //  hora:string,
 // }
 // type Props={
 //   data: CardProps;
 //   onpress:()=> void;
 // }

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
      
       
        

      
    </View>
    
  </SafeAreaView>
</ImageBackground>
);
}