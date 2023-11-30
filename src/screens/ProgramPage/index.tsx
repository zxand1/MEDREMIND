import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import uuid from 'react-uuid';
import RegisterSymptoms from '../RegisterSymptomsPage';

type CardProps = {
  id: string;
  medname: string;
  tipo: string;
  time: string;
  hora: string;
  notificationId: string;
  intervalo:string // Adicione esta linha
};



export default function ProgramPage() {

  const navigation = useNavigation();

  const [data, setData] = useState<CardProps[]>([]);
  const { getItem, setItem } = useAsyncStorage('@medremind:ingeridos');

  async function handleNew(item: CardProps) {
    try {
      const id = uuid();
      const newMedData = {
        id: id,
        medname: item.medname, // Você pode ajustar isso para o nome real do medicamento
        tipo: item.tipo, // Você pode ajustar isso para o tipo real do medicamento
        time: item.time,
        intervalo: item.intervalo // Você pode ajustar isso para a hora real do medicamento
      };

      // Obter dados anteriores do histórico
      const historyResponse = await AsyncStorage.getItem('@medremind:ingeridos');
      const previousHistory = historyResponse ? JSON.parse(historyResponse) : [];

      // Adicionar apenas o novo medicamento ao histórico
      const historyData = [...previousHistory, newMedData];

      // Salvar no histórico
      await setItem(JSON.stringify(historyData));

      console.log(historyData);

      Toast.show({
        type: 'success',
        text1: 'Medicamento utilizado!',
      });
    } catch (error) {
      console.log(error);

      Toast.show({
        type: 'error',
        text1: 'Não foi possível cadastrar.',
      });
    }
  }

  async function cancelNotification(notificationId: string) {
    // Aqui você pode adicionar lógica para cancelar a notificação
    // Certifique-se de utilizar a biblioteca ou API que você está usando para notificações
    console.log(`Cancelando notificação com ID: ${notificationId}`);
  }

  async function handleFetchData() {
    const response = await AsyncStorage.getItem('@medremind:medname');
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));


  return (
    <ImageBackground
      source={require('../../../assets/images/wallpaper.png')}
      style={styles.imageBackground}>
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
          <Text style={styles.title}>Medicamentos Programados:</Text>

          <FlatList
            data={data}
            style={{ marginTop: 10 }}
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <LinearGradient
                  colors={['#110e9d', '#2e84c1']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.submitBtnBackground}>
                  <View style={styles.submitBtn}>
                    <Text style={styles.text1}>{item.medname}</Text>
                    <Text style={styles.text2}>Intervalo: {item.intervalo} em {item.intervalo} horas</Text>
                    <TouchableOpacity 
                    onPress={() =>{
                      navigation.navigate('Tabnavigation'); 
                      handleNew(item);
                      cancelNotification(item.notificationId);
                      }
                    }>
                      <View style={styles.submiticon2}>
                        <Ionicons name="checkmark-circle-sharp" size={30} color="white" />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("RegisterSymptoms");
              }}>
                      <View style={styles.submiticon}>
                        <Ionicons name="add-circle-sharp" size={30} color="white" />
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
