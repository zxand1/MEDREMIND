import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'
import styles from "./styles";
import { FaRocket } from 'react-icons/fa';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Program() {

    return(
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
            <Text style={styles.title}>Medicamentos Programados:</Text>

          <View style={styles.submitBtn}>
          
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
                <Image
        style={styles.imageMedical}
        source={require('../../../assets/images/medicamento.png')}
        
      />        
              <Text style={styles.submitText}>Dipirona</Text>
              <Text style={styles.submitText2}>Em 3 horas(10:00)</Text>
            </LinearGradient>
            
          </View>
          

          </ScrollView>
        </View>
        
      </SafeAreaView>
    </ImageBackground>
    );

}