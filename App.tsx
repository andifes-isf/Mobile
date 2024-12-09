import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PixelRatio, StyleSheet, Image, View, Text } from "react-native";

import * as Routes from "./src/routes/Index";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#ACB6B8",
          },
          headerTitleStyle: {
            fontSize: PixelRatio.getFontScale() * 24,
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Routes.Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IndexDrawer"
          component={Routes.Routes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HistRelPrat"
          component={Routes.HistRelPrat}
          options={{
            title: "Histórico de entregas",
          }}
        />

        <Stack.Screen
          name="RelatorioEdit"
          component={Routes.RelatorioEdit}
          options={{
            title: "Editar Relatório",
          }}
        />

        <Stack.Screen
          name="EditPerfil"
          component={Routes.PerfilEdit}
          options={{
            title: "Editar Perfil",
          }}
        />

        <Stack.Screen
          name="CursoFeedback"
          component={Routes.CursoFeedback}
          options={{
            title: "Editar Perfil",
          }}
        />

        <Stack.Screen
          name="CursoHistorico"
          component={Routes.CursoHistorico}
          options={{
            title: "Editar Perfil",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: PixelRatio.getFontScale() * 24,
    fontWeight: "bold",
    justifyContent: "center",
  },
});
