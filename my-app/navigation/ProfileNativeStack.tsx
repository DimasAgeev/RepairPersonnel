import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChangePasswordScreen, ChangePersonalDataScreen, ProfileScreen } from '../screens';
import { ScreenNames } from '../screens/types';
import { HomeNativeStackList } from './types';

const Stack = createNativeStackNavigator<HomeNativeStackList>();

export const ProfileNativeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenNames.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={ScreenNames.PERSONAL_DATA} component={ChangePersonalDataScreen} />
      <Stack.Screen name={ScreenNames.PASSWORD} component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
}