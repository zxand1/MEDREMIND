import * as React from 'react';
import {Button, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import ProgramPage from '../ProgramPage';


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
      );
}