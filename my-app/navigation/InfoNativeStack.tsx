import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InfoScreen } from '../screens';
import { ScreenNames } from '../screens/types';
import { HomeNativeStackList } from './types';

const Stack = createNativeStackNavigator<HomeNativeStackList>();

export const InfoNativeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenNames.INFO} component={InfoScreen} />
    </Stack.Navigator>
  );
}