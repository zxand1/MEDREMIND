import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';

export default function RegisteredPage() {
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
        <Text style={styles.title}>Medicamentos Cadastrados:</Text>
      <ScrollView>
        <View style={styles.submitBtn}>
        <TouchableOpacity style={styles.button}
          onPress={() => RegisteredPage()} > 
          <LinearGradient
            colors={["#110e9d", "#2e84c1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.submitBtnBackground}
          >       
            <Text style={styles.submitText}>Dipirona</Text>
          </LinearGradient>
          </TouchableOpacity>
          </View>

      </ScrollView>
    </View>
    
  </SafeAreaView>
</ImageBackground>
);
}