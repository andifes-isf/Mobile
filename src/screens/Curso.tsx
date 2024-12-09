import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  TextInput,
} from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

export default function Curso({ navigation }) {
  return (
    <View style={styles.container}>
      <View /* Header */>
        <Text style={styles.title}>Turma Atual</Text>
      </View>

      <View /* Descrição */>
        <View style={styles.containerDesc}>
          <Text style={styles.labelDesc}>Nome do Componente Curricular</Text>

          <View style={styles.boxContainer}>
            <Text style={styles.labelInput}>Francês Introdutório 1</Text>
          </View>
        </View>

        <View style={styles.containerDesc}>
          <Text style={styles.labelDesc}>Trilha</Text>

          <View style={styles.boxContainer}>
            <Text style={styles.labelInput}>Francês</Text>
          </View>
        </View>

        <View style={styles.containerDesc}>
          <Text style={styles.labelDesc}>Componente</Text>

          <View style={styles.boxContainer}>
            <Text style={styles.labelInput}>Núcleo Comum</Text>
          </View>
        </View>

        <View style={styles.containerDesc}>
          <Text style={styles.labelDesc}>Docente Ministrante</Text>

          <View style={styles.boxContainer}>
            <Text style={styles.labelInput}>Fulano Fulano</Text>
          </View>
        </View>

        <View style={styles.containerDesc}>
          <Text style={styles.labelDesc}>Horas Teóricas</Text>

          <View style={styles.boxContainerMini}>
            <Text style={styles.labelInput}>16</Text>
          </View>
          <View style={styles.boxContainerSeparator}>
            <Text style={styles.labelInputSeparator}>/</Text>
          </View>
          <View style={styles.boxContainerMini}>
            <Text style={styles.labelInput}>80</Text>
          </View>
        </View>

        <View style={styles.containerDesc}>
          <Text style={styles.labelDesc}>Horas Práticas</Text>

          <View style={styles.boxContainerMini}>
            <Text style={styles.labelInput}>5</Text>
          </View>
          <View style={styles.boxContainerSeparator}>
            <Text style={styles.labelInputSeparator}>/</Text>
          </View>
          <View style={styles.boxContainerMini}>
            <Text style={styles.labelInput}>40</Text>
          </View>
        </View>
      </View>

      <View /* Feedback */>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CursoFeedback")}
            style={[styles.redirectBox, { alignSelf: "center" }]}
          >
            <Text style={[styles.labelRedirect]}>
              Feedback do Componente Curricular
            </Text>
            <Feather
              name={"edit"}
              color={"#374957"}
              size={PixelRatio.getFontScale() * 24}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View /* Ementa Moodle */>
        <View style={styles.containerEdit} /* Descrição Portifólio */>
          <TouchableOpacity
            onPress={() => console.log("Ementa")}
            style={[styles.editBox, { alignSelf: "center" }]}
          >
            <Text style={[styles.labelBoxEdit]}>Ementa</Text>
            <Feather
              name={"download-cloud"}
              color={"#374957"}
              size={PixelRatio.getFontScale() * 24}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Ementa")}
            style={[styles.editBox, { alignSelf: "center" }]}
          >
            <Text style={[styles.labelBoxEdit]}>Moodle</Text>
            <Feather
              name={"link"}
              color={"#374957"}
              size={PixelRatio.getFontScale() * 24}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.linhaHorizontal} />

      <View /* Historico completo */>
        <TouchableOpacity
          onPress={() => navigation.navigate("CursoHistorico")}
          style={[styles.confirmaBox, { alignSelf: "center" }]}
        >
          <Text style={[styles.labelConfirma]}>Histórico Completo</Text>
          <Feather
            name={"clock"}
            color={"#374957"}
            size={PixelRatio.getFontScale() * 24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
    paddingHorizontal: PixelRatio.getFontScale() * 20,
  },
  ///////////////// LINHA HORIZONTAL /////////////////
  linhaHorizontal: {
    height: 1.5,
    backgroundColor: "#CDD2D3",
    width: PixelRatio.getFontScale() * 340,
    alignSelf: "center",
  },

  ///////////////// DESCRIÇÃO TURMA /////////////////

  containerDesc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  labelDesc: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
    width: PixelRatio.getFontScale() * 120,
  },
  labelInput: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
    flex: 1,
  },
  boxContainer: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    width: "50%",
    height: PixelRatio.getFontScale() * 30,
  },
  boxContainerMini: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    width: "22.5%",
    height: PixelRatio.getFontScale() * 30,
  },
  boxContainerSeparator: {
    flexDirection: "row",
    alignItems: "center",
    width: "5%",
    height: PixelRatio.getFontScale() * 30,
  },
  labelInputSeparator: {
    fontSize: PixelRatio.getFontScale() * 22,
    fontWeight: "800",
    color: "#2F2E2E",
    textAlign: "center",
    flex: 1,
  },

  ///////////////// FEEDBACK /////////////////

  redirectBox: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    width: "60%",
    height: PixelRatio.getFontScale() * 50,
    borderRadius: 20,
  },
  labelRedirect: {
    marginLeft: PixelRatio.getFontScale() * 5,
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "600",
    color: "#2F2E2E",
    textAlign: "center",
  },

  ///////////////// EMENTA MOODLE /////////////////

  containerEdit: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  editBox: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1.5,
    width: PixelRatio.getFontScale() * 165,
    height: PixelRatio.getFontScale() * 45,
  },

  labelBoxEdit: {
    marginLeft: PixelRatio.getFontScale() * 5,
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
  },

  ///////////////// BOTTOM /////////////////

  confirmaBox: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    width: "60%",
    height: PixelRatio.getFontScale() * 55,
    borderRadius: 10,
  },
  labelConfirma: {
    marginLeft: PixelRatio.getFontScale() * 5,
    fontSize: PixelRatio.getFontScale() * 20,
    fontWeight: "600",
    color: "#2F2E2E",
    textAlign: "center",
  },
});
