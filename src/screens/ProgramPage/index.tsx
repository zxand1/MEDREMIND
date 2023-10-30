import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function ProgramPage() {

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

          <Text style={styles.title}>Medicamentos Programados:</Text>
          <ScrollView>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View >
              <LinearGradient
                colors={["#110e9d", "#2e84c1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnBackground}>

                <View >
                  <Text style={styles.submitText}>Dipirona{'\n'}Em 3 horas(10:00)</Text>
                  <TouchableOpacity style={styles.button}
                    onPress={() => ProgramPage()}  >
                    <View style={styles.submiticon}>
                      <Ionicons name="checkmark-circle-sharp" size={30} color="green" />
                    </View>
                  </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button2}
                  onPress={() => ProgramPage()}  >
                  <View style={styles.submiticon2}>
                    <Ionicons name="add-circle-sharp" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>


          </ScrollView>
        </View>

      </SafeAreaView>
    </ImageBackground>
  );

}