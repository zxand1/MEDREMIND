import * as React from 'react';
import {Button, StyleSheet, Text, View, Alert, TouchableOpacity, ImageBackground} from 'react-native';
import { styles } from './styles';
import { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import ProgramPage from '../ProgramPage';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from 'react-native-animatable'

export default function AuthPage() {
  
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function verifyAvaiableAuthentication(){
        const compatible = await LocalAuthentication.hasHardwareAsync();
        console.log(compatible);

        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log(types);
    }

    async function handleAuthentication(){
        const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
        
        if(!isBiometricEnrolled){
          return Alert.alert('Login', 'Nenhuma biometria encontrada')
        }

        const auth = await LocalAuthentication.authenticateAsync({
          promptMessage: 'Login com Biometria',
          fallbackLabel: 'Biometria não reconhecida'
        });

        console.log(auth);

    }

    useEffect(() =>{
        verifyAvaiableAuthentication();
    })

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

        <View style={styles.container}>
          <Text>
            Usuário conectado: {isAuthenticated ? 'Sim' : 'Não'}
          </Text>

        <Button 
        title="Entrar" 
        onPress={() => {
          ProgramPage;
          handleAuthentication();
        }}
        />

        </View>
        </SafeAreaView>
        </ImageBackground>
      );
}