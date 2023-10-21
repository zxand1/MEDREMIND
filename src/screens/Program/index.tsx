import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'
import styles from "./styles";
import { FaRocket } from 'react-icons/fa';


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
            <Text style={styles.title}>Programados:</Text>

          <TouchableOpacity style={styles.submitBtn}>
          
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Dipirona</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitBtn}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Dipirona</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitBtn}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Dipirona</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitBtn}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Dipirona</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitBtn}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Dipirona</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitBtn}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Dipirona</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitBtn}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Dipirona</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitBtn}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Dipirona</Text>
            </LinearGradient>
          </TouchableOpacity>

          </ScrollView>
        </View>
        
      </SafeAreaView>
    </ImageBackground>
    );

}