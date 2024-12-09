import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { PixelRatio, StyleSheet, Image, View, Text } from "react-native";

import logo from "../assets/logo.png";
import Perfil from "../screens/Perfil";
import RelatorioPratico from "../screens/RelatorioPratico";
import RelatorioOrientacao from "../screens/RelatorioOrientacao";

import Ouvidoria from "../screens/Ouvidoria";
import Curso from "../screens/Curso";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerTitle: () => (
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{route.name}</Text>
            </View>

            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logoHeaderStyle} />
            </View>
          </View>
        ),

        headerStyle: styles.headerBackgroundcolor,
        headerTitleAlign: "center",

        drawerStyle: {
          backgroundColor: "#f0f0f0",
          paddingTop: PixelRatio.getFontScale() * 40,
          width: PixelRatio.getFontScale() * 320,
        },
        drawerLabelStyle: {
          fontSize: PixelRatio.getFontScale() * 18,
          marginLeft: "5%",
        },
        drawerActiveTintColor: "black", //cor da tab selecionada
        drawerInactiveTintColor: "gray", //cor da tab inativa
      })}
    >
      <Drawer.Screen
        name="Relatório Orientação"
        component={RelatorioOrientacao}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="graduation-cap" color={color} size={size} />
          ),
          drawerLabel: "Relatório Orientação",
        }}
      />

      <Drawer.Screen
        name="Relatório Prático"
        component={RelatorioPratico}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="graduation-cap" color={color} size={size} />
          ),
          drawerLabel: "Relatório Prático",
        }}
      />

      <Drawer.Screen
        name="Ouvidoria"
        component={Ouvidoria}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="graduation-cap" color={color} size={size} />
          ),
          drawerLabel: "Ouvidoria",
        }}
      />

      <Drawer.Screen
        name="Curso"
        component={Curso}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="graduation-cap" color={color} size={size} />
          ),
          drawerLabel: "Curso",
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          drawerLabel: "Perfil",
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  //background color do header
  headerBackgroundcolor: {
    backgroundColor: "#ACB6B8",
  },

  // posicao da logo
  logoHeaderStyle: {
    height: PixelRatio.getFontScale() * 60,
    width: PixelRatio.getFontScale() * 60,
  },

  title: {
    fontSize: PixelRatio.getFontScale() * 24,
    fontWeight: "bold",
    justifyContent: "center",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  titleContainer: {
    paddingVertical: 15,
    position: "absolute",
    textAlign: "center",
  },
  logoContainer: {
    left: PixelRatio.getFontScale() * 150,
  },
});
