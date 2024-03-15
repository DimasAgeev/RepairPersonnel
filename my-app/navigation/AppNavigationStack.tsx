import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoginScreen, ScreenNames } from "../screens";
import { TabNavigationStack } from "./TabNavigationStack";

import { AppStackList, StackNames } from "./types";


const AppNavigator = createNativeStackNavigator<AppStackList>();

export const AppNavigationStack = () => {
  return (
    <AppNavigator.Navigator
      screenOptions={{ headerShown: false }}>
      {/*<AppNavigator.Screen
        name={ScreenNames.LOGIN}
        component={LoginScreen} />*/}
      <AppNavigator.Screen
        name={StackNames.TAB_STACK}
        component={TabNavigationStack} />
    </AppNavigator.Navigator>

  );
};