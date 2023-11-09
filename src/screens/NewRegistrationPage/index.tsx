import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'
import styles from "./styles";

export default function NewRegistrationPage() {
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

          <Text style={styles.title}>Cadastrar Novo Medicamento:</Text>
          <ScrollView>

            <View style={styles.submitBtn}>
              <TouchableOpacity style={styles.button}
                onPress={() => NewRegistrationPage()} >



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
                  <Text style={styles.submitText}>Injetáveis</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.submitBtn}>

              <TouchableOpacity style={styles.button}
                onPress={() => NewRegistrationPage()} >



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
                  <Text style={styles.submitText}>Comprimidos</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.submitBtn}>

              <TouchableOpacity style={styles.button}
                onPress={() => NewRegistrationPage()} >



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
                  <Text style={styles.submitText}>Gotas/Líquidos</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.submitBtn}>

              <TouchableOpacity style={styles.button}
                onPress={() => NewRegistrationPage()} >



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
                  <Text style={styles.submitText}>Pomadas</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.submitBtn}>

              <TouchableOpacity style={styles.button}
                onPress={() => NewRegistrationPage()} >



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
                  <Text style={styles.submitText}>Adesivos</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.submitBtn}>
            </View>

            <View style={styles.submitBtn}>
            </View>

          </ScrollView>
        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}