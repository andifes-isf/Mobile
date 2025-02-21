import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

export default function Perfil({ navigation }): React.JSX.Element {
  const [idioma, setIdioma] = useState("");
  const [userData, setUserData] = useState(null);
  const [proeficiencies, setProeficiencies] = useState([]);
  const [institutionData, setInstitutionData] = useState(null);
  const [loading, setLoading] = useState(true);

  const idiomas = [
    { key: "EN", value: "Inglês" },
    { key: "ES", value: "Espanhol" },
    { key: "JP", value: "Japonês" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        // Fetch user data
        const userResponse = await api.get("/user/my_data", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Fetch language proficiencies
        const proefResponse = await api.get("/isf_student/my_proeficiency", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Fetch institution data
        const institutionResponse = await api.get(
          "/institution_student/current_institution",
          { headers: { Authorization: `Bearer ${token}` } },
        );

        setUserData(userResponse.data.data);
        setProeficiencies(proefResponse.data.proeficiencies);

        if (!institutionResponse.data.error) {
          const institutionId =
            institutionResponse.data.registration.idInstituicao;

          const institutionDetailsResponse = await api.get(
            "/instituicao_ensino",
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );

          // Find the institution with the matching idInstituicao
          const institution = institutionDetailsResponse.data.find(
            (inst) => inst.idInstituicao === institutionId,
          );

          // If the institution is found, you can set the data
          if (institution) {
            setInstitutionData({
              nome: institution.nome,
              comprovante: institutionResponse.data.registration.comprovante,
            });
          } else {
            console.error("Institution not found");
          }
        }
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar os dados do perfil");
        console.error("Profile fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#374957" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E6EAEB" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.container}>
          {/* Profile Header */}
          <View style={styles.profHeaderContainer}>
            <View style={styles.logoHeaderContainer}>
              <Image
                source={{
                  uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile-Avatar-PNG.png&f=1&nofb=1&ipt=84cad49f1b6ef4eb1e5648babe5b4d2b07357cdc48a6613fa45d3d318b3c172b&ipo=images",
                }}
                style={{
                  width: PixelRatio.getFontScale() * 100,
                  height: PixelRatio.getFontScale() * 100,
                }}
                alt={"UserImg"}
              />
            </View>
            <View style={styles.textHeaderContainer}>
              <Text style={styles.nomeHeaderLabel}>
                {userData?.name} {userData?.surname}
              </Text>
              <Text style={styles.loginHeaderLabel}>{userData?.login}</Text>
            </View>
          </View>

          <View style={styles.linhaHorizontal} />

          {/* Personal Data */}
          <View>
            <Text style={styles.title}>Dados Pessoais</Text>
            <View style={styles.dadosPContainer}>
              <View>
                <Text style={[styles.label, { marginBottom: 8 }]}>
                  Email: {userData?.email}@{userData?.email_domain}
                </Text>
                <Text style={styles.label}>
                  Telefone: ({userData?.DDD}) {userData?.phone}
                </Text>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 8 }]}>
                  Etnia: {userData?.ethnicity}
                </Text>
                <Text style={styles.label}>Gênero: {userData?.gender}</Text>
              </View>
            </View>
          </View>

          <View style={styles.linhaHorizontal} />

          {/* Academic Data */}
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingRight: 10 }}>
                <Text style={styles.title}>Dados acadêmicos</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column" }}>
              {proeficiencies.map((proef, index) => (
                <View key={index}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      paddingTop: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: 20,
                        marginTop: 15,
                      }}
                    >
                      <Text style={styles.label}>
                        {proef.idioma} - Nível {proef.nivel}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        Alert.alert("Comprovante", proef.comprovante)
                      }
                      style={styles.downloadBox}
                    >
                      <Text style={[styles.labelDownload]}>
                        Documento Comprobatório
                      </Text>
                      <Feather
                        name={"download-cloud"}
                        color={"#374957"}
                        size={PixelRatio.getFontScale() * 30}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  paddingRight: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 20,
                    marginTop: 15,
                  }}
                >
                  <Text style={styles.label}>
                    Horas Práticas: {userData?.horas_praticas || "XX"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 20,
                    marginTop: 15,
                  }}
                >
                  <Text style={styles.label}>
                    Horas Teóricas: {userData?.horas_teoricas || "XX"}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.linhaHorizontal} />

          {/* Institution Data */}
          <View>
            <Text style={styles.title}>Instituição</Text>
            <View style={styles.instituicaoContainer}>
              <View style={{ marginBottom: 20 }}>
                <Text style={styles.label}>
                  {institutionData?.nome || "Nenhuma instituição vinculada"}
                </Text>
              </View>

              {institutionData?.comprovante && (
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert("Comprovante", institutionData.comprovante)
                  }
                  style={styles.downloadBox}
                >
                  <Text style={[styles.labelDownload]}>
                    Comprovante Matrícula
                  </Text>
                  <Feather
                    name={"download-cloud"}
                    color={"#374957"}
                    size={PixelRatio.getFontScale() * 30}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={styles.linhaHorizontal} />

          {/* Edit Profile */}
          <View style={{ paddingTop: 10 }}>
            <View style={styles.editContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditPerfil", {
                    userData,
                    proeficiencies,
                    institutionData,
                  })
                }
              >
                <View style={styles.signInButton}>
                  <Text style={styles.editarLabel}>Editar perfil</Text>
                  <Feather
                    name={"edit-3"}
                    color={"#374957"}
                    size={PixelRatio.getFontScale() * 30}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ... keep all your existing styles ...
  /////////////// Fontes ///////////////
  container: {
    paddingLeft: PixelRatio.getFontScale() * 24,
    paddingRight: PixelRatio.getFontScale() * 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
  label: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
  },
  labelDownload: {
    marginLeft: PixelRatio.getFontScale() * 5,
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
  },
  editarLabel: {
    fontSize: PixelRatio.getFontScale() * 18,
    fontWeight: "500",
  },
  linhaHorizontal: {
    height: 1.5,
    backgroundColor: "#CDD2D3",
    left: PixelRatio.getFontScale() * 20,
    width: PixelRatio.getFontScale() * 324,
    marginVertical: PixelRatio.getFontScale() * 15,
  },
  downloadBox: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1.5,
    width: PixelRatio.getFontScale() * 165,
    height: PixelRatio.getFontScale() * 50,
  },

  /////////////// Header Usuario ///////////////
  profHeaderContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    //paddingLeft: PixelRatio.getFontScale() * 40
  },
  textHeaderContainer: {
    justifyContent: "center",
    //paddingRight: PixelRatio.getFontScale() * 80
  },
  logoHeaderContainer: {},
  nomeHeaderLabel: {
    fontSize: PixelRatio.getFontScale() * 20,
    fontWeight: "500",
    textAlign: "center",
  },
  loginHeaderLabel: {
    fontSize: PixelRatio.getFontScale() * 14,
    fontWeight: "300",
    textAlign: "center",
    color: "#2F2E2E",
  },

  /////////////// Dados Pessoais ///////////////
  dadosPContainer: {
    flexDirection: "row",
    marginVertical: PixelRatio.getFontScale() * 10,
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    marginLeft: PixelRatio.getFontScale() * -10,
  },

  /////////////// Proeficiencia ///////////////
  proeficienciaContainer: {
    marginVertical: PixelRatio.getFontScale() * 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  /////////////// Instituicao ///////////////
  instituicaoContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },

  editContainer: {
    marginHorizontal: PixelRatio.getFontScale() * 90,
    marginVertical: PixelRatio.getFontScale() * 0,
  },
  signInButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: PixelRatio.getFontScale() * 8,
  },

  inputBoxMini: {
    borderColor: "#CDD2D3",
    borderWidth: 1,
    width: PixelRatio.getFontScale() * 60,
    height: PixelRatio.getFontScale() * 25,
  },
  // Add new styles
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6EAEB",
  },
});
