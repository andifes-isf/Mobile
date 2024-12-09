import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default function Perfil({ navigation }): React.JSX.Element {
  const [idioma, setIdioma] = React.useState("");

  const idiomas = [
    { key: "EN", value: "Inglês" },
    { key: "ES", value: "Espanhol" },
    { key: "JP", value: "Japonês" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E6EAEB" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.container}>
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
              <Text style={styles.nomeHeaderLabel}>Nome e Sobrenome</Text>
              <Text style={styles.loginHeaderLabel}>loginUsuario</Text>
            </View>
          </View>

          <View style={styles.linhaHorizontal} />

          <View>
            <Text style={styles.title}>Dados Pessoais</Text>
            <View style={styles.dadosPContainer}>
              <View>
                <Text style={[styles.label, { marginBottom: 8 }]}>
                  Email Pessoal
                </Text>
                <Text style={styles.label}>Telefone</Text>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 8 }]}>Raça</Text>
                <Text style={styles.label}>Gênero</Text>
              </View>
            </View>
          </View>

          <View style={styles.linhaHorizontal} />

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingRight: 10 }}>
                <Text style={styles.title}>Dados acadêmicos</Text>
              </View>
              <View style={{ width: PixelRatio.getFontScale() * 150 }}>
                <SelectList
                  setSelected={setIdioma}
                  data={idiomas}
                  defaultOption={{ key: "EN", value: "Inglês" }}
                  search={false}
                  maxHeight={180}
                  arrowicon={
                    <Feather
                      name={"chevron-down"}
                      color={"#374957"}
                      size={PixelRatio.getFontScale() * 20}
                    />
                  }
                  boxStyles={{ backgroundColor: "#D9D9D9" }}
                  inputStyles={styles.label}
                  dropdownStyles={{
                    zIndex: 1,
                    position: "absolute",
                    top: "100%",
                    width: "100%",
                    backgroundColor: "#D9D9D9",
                  }}
                />
              </View>
            </View>

            <View style={{ flexDirection: "column" }}>
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
                  <Text style={styles.label}>Proficiência</Text>
                </View>
                <TouchableOpacity
                  onPress={() => console.log("DocCompr")}
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
                  <Text style={styles.label}>Horas Práticas: XX</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 20,
                    marginTop: 15,
                  }}
                >
                  <Text style={styles.label}>Horas Teóricas: XX</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.linhaHorizontal} />

          <View>
            <Text style={styles.title}>Componentes Curriculares</Text>

            <View style={{ flexDirection: "column", paddingTop: 20 }}>
              <View
                style={{
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                  paddingVertical: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      width: 150,
                      flexWrap: "wrap",
                      textAlign: "center",
                    }}
                  >
                    Núcleo Comum
                  </Text>
                </View>
                <View style={styles.inputBoxMini} />
                <View>
                  <Text>/</Text>
                </View>
                <View style={styles.inputBoxMini} />
              </View>
            </View>

            <View style={{ flexDirection: "column", paddingTop: 20 }}>
              <View
                style={{
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                  paddingVertical: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      width: 150,
                      flexWrap: "wrap",
                      textAlign: "center",
                    }}
                  >
                    Componente Curricular do Idioma
                  </Text>
                </View>
                <View style={styles.inputBoxMini} />
                <View>
                  <Text>/</Text>
                </View>
                <View style={styles.inputBoxMini} />
              </View>
            </View>

            <View style={{ flexDirection: "column", paddingTop: 20 }}>
              <View
                style={{
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                  paddingVertical: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      width: 150,
                      flexWrap: "wrap",
                      textAlign: "center",
                    }}
                  >
                    Componente Curricular para todos os idiomas
                  </Text>
                </View>
                <View style={styles.inputBoxMini} />
                <View>
                  <Text>/</Text>
                </View>
                <View style={styles.inputBoxMini} />
              </View>
            </View>

            <View style={{ flexDirection: "column", paddingTop: 20 }}>
              <View
                style={{
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                  paddingVertical: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      width: 150,
                      flexWrap: "wrap",
                      textAlign: "center",
                    }}
                  >
                    Componente Curricular Português para Estrangeiros
                  </Text>
                </View>
                <View style={styles.inputBoxMini} />
                <View>
                  <Text>/</Text>
                </View>
                <View style={styles.inputBoxMini} />
              </View>
            </View>
          </View>

          <View style={styles.linhaHorizontal} />

          <View style={{ paddingTop: 10 }}>
            <View style={styles.editContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditPerfil")}
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
    marginLeft: PixelRatio.getFontScale() * -70,
  },

  /////////////// Proeficiencia ///////////////
  proeficienciaContainer: {
    marginVertical: PixelRatio.getFontScale() * 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  /////////////// Instituicao ///////////////
  instituicaoContainer: {
    marginVertical: PixelRatio.getFontScale() * 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
});
