import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

import { Feather } from "@expo/vector-icons";

export default function RelatorioEdit({ navigation }): React.JSX.Element {
  const [categoria, setCategoria] = React.useState("");
  const [focoCategoria, setfocoCategoria] = React.useState("EN");

  const categorias = [
    { key: "1", value: "Preparação de curso" },
    { key: "2", value: "Preparação do material didático" },
    { key: "3", value: "Preparação de atividades" },
    { key: "4", value: "Preparação de aulas" },
    { key: "5", value: "Preparação de testes de nivelamento" },
    { key: "6", value: "Ministração de oficinas" },
  ];

  const [idioma, setIdioma] = React.useState("");
  const [focoIdioma, setfocoIdioma] = React.useState("EN");

  const idiomas = [
    { key: "EN", value: "Inglês" },
    { key: "ES", value: "Espanhol" },
    { key: "JP", value: "Japonês" },
    { key: "FR", value: "Francês" },
    { key: "IT", value: "Italiano" },
    { key: "AL", value: "Alemão" },
  ];

  const [form, setForm] = useState({
    //Dados pra passar pra api do Rafa
    categoria: "",
    idioma: "",
    titulo: "",
    cargaHoraria: "",
    proficiencia: "",
    descricao: "",
    portifolio: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header} /* TITULO + HISTORICO */>
        <View>
          <Text style={styles.title}>Horas Práticas</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("HistRelPrat")}
            style={[styles.redirectBox, { alignSelf: "center" }]}
          >
            <Text style={[styles.labelRedirect]}>Histórico</Text>
            <Feather
              name={"arrow-right"}
              color={"#374957"}
              size={PixelRatio.getFontScale() * 24}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.linhaHorizontal}></View>

      <View style={styles.containerOR} /*Dados Ultima Entrega*/>
        <View style={styles.containerEdit}>
          <Text style={styles.labelEdit}>Orientador Responsável</Text>

          <View style={styles.boxInputOR}>
            <Text style={styles.labelInput}>Fulano Fulano</Text>
          </View>
        </View>

        <View style={styles.containerEdit}>
          <Text style={styles.labelEdit}>Data Correção</Text>

          <View style={styles.boxInputOR}>
            <Text style={styles.labelInput}>30/10/2024</Text>
          </View>
        </View>

        <View style={styles.paddingStatus}>
          <TouchableOpacity
            onPress={() => console.log("Histórico")}
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
      </View>

      <View style={styles.linhaHorizontal}></View>

      <View /* DESCRIÇÃO DO RELATORIO */>
        <View style={styles.linksHorizontais}>
          <SelectList
            setSelected={setCategoria}
            data={categorias}
            placeholder="Categoria"
            search={false}
            maxHeight={180}
            arrowicon={
              <Feather
                name={"chevron-down"}
                color={"#374957"}
                size={PixelRatio.getFontScale() * 20}
              />
            }
            boxStyles={[
              styles.selectBox,
              { width: PixelRatio.getFontScale() * 230 },
            ]}
            inputStyles={styles.selectLabel}
            dropdownStyles={{
              zIndex: 1,
              position: "absolute",
              top: "100%",
              width: "100%",
              backgroundColor: "#D9D9D9",
            }}
          />
          <SelectList
            setSelected={setIdioma}
            data={idiomas}
            placeholder="Idioma"
            search={false}
            maxHeight={180}
            arrowicon={
              <Feather
                name={"chevron-down"}
                color={"#374957"}
                size={PixelRatio.getFontScale() * 20}
              />
            }
            boxStyles={styles.selectBox}
            inputStyles={styles.selectLabel}
            dropdownStyles={{
              zIndex: 1,
              position: "absolute",
              top: "100%",
              width: "100%",
              backgroundColor: "#D9D9D9",
            }}
          />
        </View>

        <View /* Titulo CargaHoraria Proficiencia */>
          <View style={styles.containerEdit}>
            <Text style={styles.labelEdit}>Título</Text>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.boxInput}>
                <TextInput
                  style={styles.labelInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={form.titulo}
                  onChangeText={(titulo) => setForm({ ...form, titulo })}
                />
              </View>

              <Feather
                name="edit"
                color={"#374957"}
                size={PixelRatio.getFontScale() * 24}
                style={{
                  paddingLeft: PixelRatio.getFontScale() * 15,
                  alignItems: "center",
                  paddingTop: PixelRatio.getFontScale() * 3,
                }}
              />
            </View>
          </View>

          <View style={styles.containerEdit}>
            <Text style={styles.labelEdit}>Carga Horária</Text>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.boxInput}>
                <TextInput
                  style={styles.labelInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={form.cargaHoraria}
                  onChangeText={(cargaHoraria) =>
                    setForm({ ...form, cargaHoraria })
                  }
                />
              </View>

              <Feather
                name="edit"
                color={"#374957"}
                size={PixelRatio.getFontScale() * 24}
                style={{
                  paddingLeft: PixelRatio.getFontScale() * 15,
                  alignItems: "center",
                  paddingTop: PixelRatio.getFontScale() * 3,
                }}
              />
            </View>
          </View>

          <View style={styles.containerEdit}>
            <Text style={styles.labelEdit}>Proficiência</Text>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.boxInput}>
                <TextInput
                  style={styles.labelInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={form.proficiencia}
                  onChangeText={(proficiencia) =>
                    setForm({ ...form, proficiencia })
                  }
                />
              </View>

              <Feather
                name="edit"
                color={"#374957"}
                size={PixelRatio.getFontScale() * 24}
                style={{
                  paddingLeft: PixelRatio.getFontScale() * 15,
                  alignItems: "center",
                  paddingTop: PixelRatio.getFontScale() * 3,
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.containerEdit} /* Descrição Portifólio */>
          <TouchableOpacity
            onPress={() => console.log("Ementa")}
            style={[styles.editBox, { alignSelf: "center" }]}
          >
            <Text style={[styles.labelBoxEdit]}>Descrição</Text>
            <Feather
              name={"file-plus"}
              color={"#374957"}
              size={PixelRatio.getFontScale() * 24}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Ementa")}
            style={[styles.editBox, { alignSelf: "center" }]}
          >
            <Text style={[styles.labelBoxEdit]}>Portifólio</Text>
            <Feather
              name={"link"}
              color={"#374957"}
              size={PixelRatio.getFontScale() * 24}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.linhaHorizontal}></View>

      <View
        style={{
          paddingTop: PixelRatio.getFontScale() * 10,
        }} /*Confirmar envio*/
      >
        <TouchableOpacity
          onPress={() => console.log("Confirmar Envio")}
          style={[styles.confirmaBox, { alignSelf: "center" }]}
        >
          <Text style={[styles.labelConfirma]}>Confirmar Envio</Text>
          <Feather
            name={"check"}
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
  },

  title: {
    fontSize: 22,
    paddingBottom: 10,
    fontWeight: "600",
  },
  label: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
  },

  // Linha Horizontal //

  linhaHorizontal: {
    height: 1.5,
    backgroundColor: "#CDD2D3",
    width: PixelRatio.getFontScale() * 340,
    alignSelf: "center",
    marginVertical: PixelRatio.getFontScale() * 25,
  },

  // Header //

  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: PixelRatio.getFontScale() * 25,
  },

  // Descrição Relatório //

  linksHorizontais: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: PixelRatio.getFontScale() * 15,
  },

  containerEdit: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },

  labelEdit: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
    width: PixelRatio.getFontScale() * 120,
  },

  boxInput: {
    backgroundColor: "#E6EAEB",
    borderColor: "#374957",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    width: PixelRatio.getFontScale() * 200,
    paddingHorizontal: 10,
  },

  labelInput: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
    flex: 1,
  },

  // Orientador Responsavel //

  containerOR: {
    width: "100%",
  },

  headerOR: {
    paddingLeft: PixelRatio.getFontScale() * 25,
  },
  boxInputOR: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    width: PixelRatio.getFontScale() * 200,
    height: PixelRatio.getFontScale() * 30,
  },

  paddingStatus: {
    paddingTop: PixelRatio.getFontScale() * 15,
  },

  // Confirmar box //

  confirmaBox: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    width: PixelRatio.getFontScale() * 220,
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

  // Redirect box //

  redirectBox: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    width: PixelRatio.getFontScale() * 165,
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

  // Select Box //

  selectBox: {
    width: PixelRatio.getFontScale() * 150,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    height: PixelRatio.getFontScale() * 65,
  },

  selectLabel: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
  },

  // Edit Box //

  editBox: {
    borderColor: "#CDD2D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1.5,
    width: PixelRatio.getFontScale() * 165,
    height: PixelRatio.getFontScale() * 50,
  },

  labelBoxEdit: {
    marginLeft: PixelRatio.getFontScale() * 5,
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "400",
    color: "#2F2E2E",
    textAlign: "center",
  },
});
