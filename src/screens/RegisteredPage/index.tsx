import { Text, View, ImageBackground,FlatList, TouchableOpacity, TextInput, ScrollView, Image, Button } from "react-native";
import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";
import React, { useState , useEffect,useCallback } from 'react';
import {useFocusEffect} from "@react-navigation/native"
import {useAsyncStorage} from '@react-native-async-storage/async-storage';


export default function RegisteredPage() {
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
 

   type CardProps = {
    id: string;
    medname:string,
    tipo:string,
    hora:string,
  }
  type Props={
    data: CardProps;
    onPress:()=> void;
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
      
  data={data}
  style={{marginTop:5}}
  contentContainerStyle={{marginHorizontal:20}}
  keyExtractor={(item) => item.id}
  renderItem={({item}) => {
    return(
      <View  style={styles.submitBtn}>
        <Text style={styles.text}>Nome: {item.medname}</Text>
        <Text style={styles.text}>Tipo: {item.tipo}</Text>
        <Text style={styles.text}>Intervalo: {item.hora} em {item.hora} horas</Text>
        <TouchableOpacity onPress={()=> handleRemove(item.id)}>
        <View style={styles.submiticon2}>
             <AntDesign name="delete" size={30} color="red" />
        </View>
        
            </TouchableOpacity>
        
       
      </View>
  
)
}}
></FlatList>
      



    </View>
    
  </SafeAreaView>
  
</ImageBackground>
);
}