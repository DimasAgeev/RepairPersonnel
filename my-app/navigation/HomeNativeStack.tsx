import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsCategoryScreen, DetailsIncidentScreen, DetailsNewsScreen, HomeScreen } from '../screens';
import { ScreenNames } from '../screens/types';
import { HomeNativeStackList } from './types';

const Stack = createNativeStackNavigator<HomeNativeStackList>();

export const HomeNativeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ScreenNames.MAIN} component={HomeScreen} />
      <Stack.Screen name={ScreenNames.DETAILS_INCIDENT} component={DetailsIncidentScreen} />
      <Stack.Screen name={ScreenNames.DETAILS_NEWS} component={DetailsNewsScreen} />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.category })}

        name={ScreenNames.DETAILS_CATEGORY} component={DetailsCategoryScreen} />
    </Stack.Navigator>
  );
}