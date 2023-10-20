import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';

import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable'


import styles from "./styles";

export default function RegisterPage() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function handleSubmit() {
    formError.username = !formData.username ? "Informe o seu usuário" : "";
    formError.email = !formData.email ? "Informe o e-mail" : "";
    formError.password = formData.password.length < 8 ? "Informe a sua senha" : "";
    formError.confirmpassword = formData.confirmpassword.length < 8 ? "Informe a sua senha novamente" : "";

    if (Object.values(formError).some((err) => !!err)) {
      console.log(formError);
      setFormError({ ...formError });
      return;
    }

    console.log(formData);
    alert("Login realizado!");
  }

  return (
    <ImageBackground
      source={require("C:/ProjetoIntegrador/MEDREMIND/assets/images/wallpaper.png")}
      style={styles.imageBackground}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Animatable.Image
          source={require("C:/ProjetoIntegrador/MEDREMIND/assets/images/logo.png")}
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
          <Text style={styles.title}>Cadastre-se:</Text>
          <TextInput
            style={[
              styles.formInput,
              formError.username ? styles.formInputError : null,
            ]}
            value={formData.username}
            onChangeText={(username) => {
              setFormData((formData) => ({ ...formData, username }));
              setFormError({ username: "", email: "", password: "", confirmpassword:"", });
            }}
            placeholder="Usuário"
            autoCapitalize="none"
            returnKeyType="next"
          />
          {formError.username && (
            <Text style={styles.errorMsg}>{formError.username}</Text>
          )}
          <TextInput
            style={[
              styles.formInput,
              formError.email ? styles.formInputError : null,
            ]}
            value={formData.email}
            onChangeText={(email) => {
              setFormData((formData) => ({ ...formData, email }));
              setFormError({ username: "", email: "", password: "", confirmpassword:"" });
            }}
            placeholder="E-mail"
            autoCapitalize="none"
            returnKeyType="next"
          />
          {formError.email && (
            <Text style={styles.errorMsg}>{formError.email}</Text>
          )}
          <TextInput
            style={[
              styles.formInput,
              formError.password ? styles.formInputError : null,
            ]}
            value={formData.password}
            onChangeText={(password) => {
              setFormData((formData) => ({ ...formData, password }));
              setFormError({ username: "", email: "", password: "", confirmpassword:"" });
            }}
            placeholder="Senha"
            secureTextEntry
            autoCapitalize="none"
            returnKeyType="next"
          />
          {formError.password && (
            <Text style={styles.errorMsg}>{formError.password}</Text>
          )}
          <TextInput
            style={[
              styles.formInput,
              formError.confirmpassword ? styles.formInputError : null,
            ]}
            value={formData.confirmpassword}
            onChangeText={(confirmpassword) => {
              setFormData((formData) => ({ ...formData, confirmpassword }));
              setFormError({ username: "", email: "", password: "", confirmpassword:"" });
            }}
            placeholder="Confirme sua senha"
            secureTextEntry
            autoCapitalize="none"
            returnKeyType="next"
          />
          {formError.confirmpassword && (
            <Text style={styles.errorMsg}>{formError.confirmpassword}</Text>
          )}
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Cadastrar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
