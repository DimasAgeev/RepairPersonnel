import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ScreenNames } from '../screens';
import { HomeNativeStackList } from './types';

const Stack = createNativeStackNavigator<HomeNativeStackList>();

export const HomeNativeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}