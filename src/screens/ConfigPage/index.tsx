import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Registrosintomas from "../RegistroSintomas/Registrosintomas";
import ProgramPage from "../ProgramPage";
export default function ConfigPage({ navigation }) {
  const Registrosintomas = () => {
    navigation.navigate("Registrosintomas")
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
                onPress={() => Registrosintomas()}  >
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