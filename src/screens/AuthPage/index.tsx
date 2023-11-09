import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';

import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import styles from "./styles";

import { useNavigation } from '@react-navigation/native';

export default function AuthPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    password: "",
  });

  const navigation = useNavigation();

  function openRegister() {
    navigation.navigate('RegisterPage');
  }
  function openReset() {
    navigation.navigate('ResetPage');
  }
  function openTabnavigation() {
    navigation.navigate('Tabnavigation');
  }

  function handleSubmit() {
    formError.username = !formData.username ? "Informe o seu usuário" : "";
    formError.password = formData.password.length < 8 ? "Informe a sua senha" : "";

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
          duration={3500}
          direction="alternate-reverse"
        />
        <View style={styles.logoTitle}>
          <Text style={styles.logoText}>Med</Text>
          <Text style={styles.logoText}>Remind</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Seja bem-vindo(a):</Text>
          <TextInput
            style={[
              styles.formInput,
              formError.username ? styles.formInputError : null,
            ]}
            value={formData.username}
            onChangeText={(username) => {
              setFormData((formData) => ({ ...formData, username }));
              setFormError({ username: "", password: "" });
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
              formError.password ? styles.formInputError : null,
            ]}
            value={formData.password}
            onChangeText={(password) => {
              setFormData((formData) => ({ ...formData, password }));
              setFormError({ username: "", password: "" });
            }}
            placeholder="Senha"
            secureTextEntry
            autoCapitalize="none"
            returnKeyType="next"
          />
          {formError.password && (
            <Text style={styles.errorMsg}>{formError.password}</Text>
          )}
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <LinearGradient
              colors={["#110e9d", "#2e84c1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnBackground}
            >
              <Text style={styles.submitBtnText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEsqueci} onPress={openReset}>
            <Text style={styles.btnSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCadastro} onPress={openRegister}>
            <Text style={styles.btnCadastrar}>Ainda não é cadastrado? Cadastre-se!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCadastro} onPress={openTabnavigation}>
            <Text style={styles.btnCadastrar}>Página programados</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
