import { Text, View, ImageBackground,FlatList, TouchableOpacity, TextInput, ScrollView, Image, Button } from "react-native";
import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'

import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import styles from "./styles";
import React, { useState , useEffect,useCallback } from 'react';
import {useFocusEffect} from "@react-navigation/native"
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

type CardProps = {
  id: string;
  medname:string,
  tipo:string,
  hora:string,
  intervalo:string,
}
type Props={
  data: CardProps;
  onPress:()=> void;
}

export default function RegisteredPage() {

  const navigation = useNavigation();

  const [data, setData]= useState<CardProps[]>([]);
  const { getItem, setItem} = useAsyncStorage("@medremind:medname");
  
  async function handleFetchData(){
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }
  async function handleRemove(id:string){
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter((item: CardProps) => item.id !== id);
    setItem(JSON.stringify(data));
    setData(data);
  }

  useFocusEffect(useCallback(()=>{
    handleFetchData();
  }, []));
  

  
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
  data={data}
  style={{marginTop:5}}
  contentContainerStyle={{marginHorizontal:20}}
  keyExtractor={(item) => item.id}
  renderItem={({item}) => {
    return(
      <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>
                  <View  style={styles.submitBtn}>
                  <Text style={styles.text1}>Medicação: {item.medname}</Text>
                  <Text style={styles.text2}>Tipo: {item.tipo}</Text>
                  <Text style={styles.text3}>Intervalo: {item.intervalo} em {item.intervalo} horas</Text>
                  <TouchableOpacity 
                  onPress={() => {
                    navigation.navigate("EditMedicationPage");
                  }}>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> handleRemove(item.id)}>
                    <View style={styles.submiticon2}>
                    <FontAwesome5 name="trash" size={20} color="white" />
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