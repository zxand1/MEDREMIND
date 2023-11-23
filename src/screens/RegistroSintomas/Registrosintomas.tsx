import { Text, View, ImageBackground,FlatList, TouchableOpacity, TextInput, ScrollView, Image, Button } from "react-native";
import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'

import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import React, { useState , useEffect,useCallback } from 'react';
import {useFocusEffect} from "@react-navigation/native"
import {useAsyncStorage} from '@react-native-async-storage/async-storage';


export default function Registrosintomas({navigation}) {
  const Tabnavigation = () => {
    navigation.navigate("Tabnavigation")
  }

  const [data, setData]= useState<CardProps[]>([]);
  const { getItem, setItem} = useAsyncStorage("@medremind:registro");
  
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
    registro:string,
    date:string,
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
        <Text style={styles.title}>Sintomas Cadastrados:</Text>
        <ScrollView>  
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
                  <Text style={styles.text1}>Sitomas: {item.registro}</Text>
                  <Text style={styles.text3}>Data {item.date} </Text>
                  
                  <TouchableOpacity onPress={()=> handleRemove(item.id)}>
                    <View style={styles.submiticon2}>
                    <FontAwesome5 name="trash" size={20} color="black" />
                    </View>
                  </TouchableOpacity>           
                </View>
        </LinearGradient>
        
)
}}
></FlatList>

<View style={styles.submitBtn2}>
              <TouchableOpacity
                style={styles.button}
                onPress={Tabnavigation}
              >
                <LinearGradient
                  colors={['#110e9d', '#2e84c1']}
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