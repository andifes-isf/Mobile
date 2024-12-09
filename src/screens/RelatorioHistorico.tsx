import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  FlatList,
} from "react-native";
import React from "react";

import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Checkbox } from "expo-checkbox";

import { Feather } from "@expo/vector-icons";

export default function RelatorioHistorico({ navigation }) {
  const historico = [
    {
      id: 1,
      titulo: "RelatorioDidatico",
      orientador: "Fulano Fulano",
      data: "08/10/2024",
    },
    {
      id: 2,
      titulo: "RelatorioEstudo",
      orientador: "Fulano Fulano",
      data: "01/10/2024",
    },
    {
      id: 3,
      titulo: "RelatorioAula",
      orientador: "Fulano Fulano",
      data: "24/09/2024",
    },
    {
      id: 4,
      titulo: "RelatorioExtracurricular",
      orientador: "Fulano Fulano",
      data: "17/09/2024",
    },
  ];

  const renderHistorico = ({ item }) => (
    <View style={styles.questionContainer} /* Relatorio */>
      <View style={styles.containerDesc} /* Titulo */>
        <Text style={styles.labelDesc}>Título</Text>

        <View style={styles.boxContainer}>
          <Text style={styles.labelInput}>{item.titulo}</Text>
        </View>
      </View>

      <View style={styles.containerDesc} /* Orientador */>
        <Text style={styles.labelDesc}>Orientador</Text>

        <View style={styles.boxContainer}>
          <Text style={styles.labelInput}>{item.orientador}</Text>
        </View>
      </View>

      <View style={styles.containerDesc} /* Data */>
        <Text style={styles.labelDesc}>Data Correção</Text>

        <View style={styles.boxContainer}>
          <Text style={styles.labelInput}>{item.data}</Text>
        </View>
      </View>

      <View style={styles.redirectContainer} /* Status e Editar Entrega */>
        <View>
          <TouchableOpacity
            onPress={() => console.log("Status")}
            style={[styles.redirectBox, { alignSelf: "center" }]}
          >
            <Text style={[styles.labelRedirect]}>Status</Text>
            <Feather
              name={"edit"}
              color={"#374957"}
              size={PixelRatio.getFontScale() * 24}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("RelatorioEdit")}
            style={[styles.redirectBox, { alignSelf: "center" }]}
          >
            <Text style={[styles.labelRedirect]}>Editar Entrega</Text>
            <Feather
              name={"edit"}
              color={"#374957"}
              size={PixelRatio.getFontScale() * 24}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.linhaHorizontalMini} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={historico}
        renderItem={({ item }) => renderHistorico({ item })}
        keyExtractor={(item, index) =>
          item.titulo + "-" + item.id + "-" + index
        }
        contentContainerStyle={styles.lista}
      />
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
  lista: {
    padding: 10,
  },
  ///////////////// LINHA HORIZONTAL /////////////////
  linhaHorizontal: {
    height: 1.5,
    backgroundColor: "#CDD2D3",
    width: PixelRatio.getFontScale() * 340,
    alignSelf: "center",
  },
  linhaHorizontalMini: {
    height: 1,
    backgroundColor: "#CDD2D3",
    width: PixelRatio.getFontScale() * 300,
    alignSelf: "center",
    marginVertical: PixelRatio.getFontScale() * 10,
  },
  ///////////////// HEADER /////////////////

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
    width: "60%",
    height: PixelRatio.getFontScale() * 30,
  },

  ///////////////// SELECT BOX /////////////////
  questionContainer: {
    paddingVertical: PixelRatio.getFontScale() * 15,
  },
  selectContainer: {
    paddingTop: PixelRatio.getFontScale() * 15,
    alignSelf: "center",
  },

  selectBox: {
    width: PixelRatio.getFontScale() * 260,
    backgroundColor: "#e5e6eb",
    alignItems: "center",
  },

  selectLabel: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
    paddingLeft: 10,
  },

  ///////////////// FEEDBACK /////////////////

  redirectContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: PixelRatio.getFontScale() * 10,
  },
  redirectBox: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    width: "70%",
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
});
