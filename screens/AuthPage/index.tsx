import { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  Animated,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import { StatusBar } from "expo-status-bar";

export default function AuthPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    password: "",
  });

  function handleSubmit() {
    formError.username = !formData.username ? "Informe o seu usuário" : "";
    formError.password =
      formData.password.length < 8 ? "Informe a sua senha" : "";

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
      source={require("../../assets/images/wallpaper.png")}
      style={styles.imageBackground}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <View style={styles.logoTitle}>
          <Text style={styles.logoText}>Med</Text>
          <Text style={styles.logoText}>Remind</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Seja bem-vindo(a)!</Text>
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
          <TouchableOpacity style={styles.title}>
            <Text style={styles.botaoSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.title}>
            <Text style={styles.botaoCadastrar}>Ainda não é cadastrado? Cadastre-se!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
