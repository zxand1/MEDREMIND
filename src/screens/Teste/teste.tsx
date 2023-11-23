import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useFocusEffect} from "@react-navigation/native"
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import uuid from 'react-uuid';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Navigator = createNativeStackNavigator();
export default function Teste() {
  
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

          
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
