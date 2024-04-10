import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsNewsScreen, NewsScreen, ScreenNames } from '../screens';
import { HomeNativeStackList } from './types';

const Stack = createNativeStackNavigator<HomeNativeStackList>();

export const NewsNativeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenNames.NEWS} component={NewsScreen} />
      <Stack.Screen name={ScreenNames.DETAILS_NEWS} component={DetailsNewsScreen} />
    </Stack.Navigator>
  );
}