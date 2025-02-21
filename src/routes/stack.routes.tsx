import { createStackNavigator } from "@react-navigation/stack";

import Perfil from "../screens/Perfil";
import RelEditPrat from "../screens/RelatorioEdit";
import HistRelPrat from "../screens/RelatorioHistoricos";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaLogin" component={Perfil} />

        <Stack.Screen name="EditRelPratico" component={RelEditPrat} />

        <Stack.Screen name="HistRelPrat" component={HistRelPrat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
