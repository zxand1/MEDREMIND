import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';

import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'


import styles from "./styles";

export default function ResetPage() {

  const [formData, setFormData] = useState({
    email: "",
  });

  const [formError, setFormError] = useState({
    email: "",
  });

  function handleSubmit() {
    formError.email = !formData.email ? "Informe o e-mail" : "";

    if (Object.values(formError).some((err) => !!err)) {
      console.log(formError);
      setFormError({ ...formError });
      return;
    }

    console.log(formData);
    alert("E-mail Confirmado");
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/wallpaper.png")}
      style={styles.imageBackground}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Animatable.Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logoImage}
          animation="rotate"
          iterationCount="infinite"
          duration={3800}
          direction="alternate-reverse"
        />
        <View style={styles.logoTitle}>
          <Text style={styles.logoText}>Med</Text>
          <Text style={styles.logoText}>Remind</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Confirme seu e-mail:</Text>
          <TextInput
            style={[
              styles.formInput,
              formError.email ? styles.formInputError : null,
            ]}
            value={formData.email}
            onChangeText={(email) => {
              setFormData((formData) => ({ ...formData, email }));
              setFormError({ email: "", });
            }}
            placeholder="E-mail"
            autoCapitalize="none"
            returnKeyType="next"
          />
          {formError.email && (
            <Text style={styles.errorMsg}>{formError.email}</Text>
          )}
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Verificar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
