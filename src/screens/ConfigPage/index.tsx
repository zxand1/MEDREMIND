import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity, ScrollView  } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from 'react-native-animatable'
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Registrosintomas from "../RegistroSintomas/Registrosintomas";
import { useNavigation } from "@react-navigation/native";
export default function ConfigPage() {
  
  const navigation = useNavigation();
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
          <ScrollView>
            <Text style={styles.title}>Configurações:</Text>
            <View style={styles.submitBtn}>
              <TouchableOpacity style={styles.button}
                onPress={() => (null)}  >
                <View style={styles.submiticon}>
                  <Ionicons name="notifications" size={24} color="black" />
                </View>
                <Text style={styles.text}>Notificações</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.submitBtn}>
              <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Registrosintomas')}  >
                <View style={styles.submiticon}>
                <Ionicons name="ios-add-circle-outline" size={24} color={"black"} />
                </View>
                <Text style={styles.text}>Registros de sintomas</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.submitBtn}>
              <TouchableOpacity style={styles.button}
                onPress={() => Registrosintomas()}  >
                <View style={styles.submiticon}>
                  <FontAwesome name="paint-brush" size={24} color="black" />
                </View>
                <Text style={styles.text}>Tema</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );

}