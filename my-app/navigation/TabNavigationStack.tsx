import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNativeStack } from "./HomeNativeStack";



import { StackNames, TabStackList } from "./types";
import { FavoritesScreen, ProfileScreen, ScreenNames, SendScreen } from '../screens';
import { NewsScreen } from '../screens/tabScreens/NewsScreen';


const TabNavigator = createBottomTabNavigator<TabStackList>();

export const TabNavigationStack = () => {
  return (
    <TabNavigator.Navigator screenOptions={{ headerShown: false }} >
      <TabNavigator.Screen
        name={StackNames.HOME_STACK} component={HomeNativeStack} />
      <TabNavigator.Screen
        name={ScreenNames.NEWS} component={NewsScreen} />
      <TabNavigator.Screen
        name={ScreenNames.SEND} component={SendScreen} />
      <TabNavigator.Screen
        name={ScreenNames.FAVORITES} component={FavoritesScreen} />
      <TabNavigator.Screen
        name={ScreenNames.PROFILE} component={ProfileScreen} />
    </TabNavigator.Navigator >
  )

};