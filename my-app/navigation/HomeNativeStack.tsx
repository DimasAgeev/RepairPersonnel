import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, ScreenNames } from '../screens';
import { HomeNativeStackList } from './types';

const Stack = createNativeStackNavigator<HomeNativeStackList>();

export const HomeNativeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}