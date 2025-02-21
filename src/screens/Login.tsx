import { useState } from "react";
import React from "react";
import { Checkbox } from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  PixelRatio,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../services/api";

export default function Login({ navigation }): React.JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [showSenha, setshowSenha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    setIsLoading(true);

    try {
      // Login API call
      const response = await api.post("/login", {
        login: email,
        password: password,
      });

      const { token } = response.data;

      // Store token
      await AsyncStorage.setItem("token", token);

      // Get user data
      const userResponse = await api.get("/user/my_data", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (userResponse.data.error) {
        throw new Error(userResponse.data.error);
      }

      const { type } = userResponse.data.data;
      await AsyncStorage.setItem("userType", type);

      navigation.navigate("IndexDrawer");
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Erro",
        "Erro ao realizar login. Verifique suas credenciais.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E6EAEB" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fufmg.br%2Fthumbor%2FaPsgSTCyIlwR3g8Oq-FK_bXM2rA%3D%2F14x0%3A207x296%2F352x540%2Fhttps%3A%2F%2Fufmg.br%2Fstorage%2F4%2F1%2F2%2F5%2F4125a853a927625429f1881ba4e0f6db_16910652569013_1465080567.png&f=1&nofb=1&ipt=dff11192280981a77e0dfd1f5701310e88bef3ecc409ff8a347a17ac6cfecd65&ipo=images",
            }}
            style={styles.headerImg}
            alt={"Logo"}
          />
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Feather
              name="user"
              color={"#374957"}
              size={PixelRatio.getFontScale() * 30}
              style={styles.icon}
            />
            <TextInput
              style={styles.inputControll}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="login"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Feather
              name="lock"
              color={"#374957"}
              size={PixelRatio.getFontScale() * 30}
              style={styles.icon}
            />
            <TextInput
              style={styles.inputControllSenha}
              secureTextEntry={!showSenha}
              placeholder="senha"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setshowSenha(!showSenha)}
              style={styles.iconEye}
            >
              <Feather
                name={showSenha ? "eye" : "eye-off"}
                color={"#374957"}
                size={PixelRatio.getFontScale() * 30}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rememberMeContainer}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <Text
            style={[
              styles.rememberMeLabel,
              { color: isChecked ? "#000" : "#666" },
            ]}
          >
            Lembrar conta
          </Text>
        </View>

        <View style={styles.signInContainer}>
          <TouchableOpacity onPress={handleLogin} disabled={isLoading}>
            <View style={styles.signInButton}>
              {isLoading ? (
                <ActivityIndicator color="#0000ff" />
              ) : (
                <Text style={styles.signInLabel}>Entrar</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Keep the same StyleSheet as before

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PixelRatio.getFontScale() * 24,
  },

  title: {
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: "bold",
  },

  header: {
    marginVertical: PixelRatio.getFontScale() * 30,
  },

  headerImg: {
    width: PixelRatio.getFontScale() * 212,
    height: PixelRatio.getFontScale() * 294,
    alignSelf: "center",
  },

  form: {
    paddingTop: PixelRatio.getFontScale() * 30,
    alignSelf: "center",
    paddingVertical: PixelRatio.getFontScale() * 12,
  },
  input: {
    backgroundColor: "#E6EAEB",
    borderColor: "#374957",
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1.5,
    width: 300,
  },
  icon: {
    alignSelf: "center",
    paddingLeft: PixelRatio.getFontScale() * 10,
  },
  iconEye: {
    flex: 0,
    alignSelf: "center",
    paddingLeft: PixelRatio.getFontScale() * 0,
    paddingRight: PixelRatio.getFontScale() * 20,
  },
  inputControll: {
    flex: 1,
    paddingVertical: PixelRatio.getFontScale() * 8,
    fontSize: PixelRatio.getFontScale() * 18,
    fontWeight: "300",
    textAlign: "center",
    paddingLeft: 0,
    paddingRight: PixelRatio.getFontScale() * 30,
  },
  inputControllSenha: {
    flex: 1,
    paddingVertical: PixelRatio.getFontScale() * 8,
    fontSize: PixelRatio.getFontScale() * 18,
    fontWeight: "300",
    textAlign: "center",
    paddingLeft: PixelRatio.getFontScale() * 20,
    paddingRight: PixelRatio.getFontScale() * 0,
  },
  signInContainer: {
    marginHorizontal: PixelRatio.getFontScale() * 50,
    marginVertical: PixelRatio.getFontScale() * 40,
  },
  signInButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: PixelRatio.getFontScale() * 8,
  },
  registerInButton: {
    //backgroundColor: "#D9D9D9",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: PixelRatio.getFontScale() * 8,
  },
  signInLabel: {
    fontSize: PixelRatio.getFontScale() * 18,
    fontWeight: "500",
  },
  semContaFooter: {
    fontSize: 14,
    fontWeight: "400",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.1,
    textDecorationLine: "underline",
  },
  rememberMeContainer: {
    flexDirection: "row",
    paddingLeft: PixelRatio.getFontScale() * 31,
  },
  rememberMeLabel: {
    paddingLeft: PixelRatio.getFontScale() * 5,
    fontWeight: "400",
  },
});
