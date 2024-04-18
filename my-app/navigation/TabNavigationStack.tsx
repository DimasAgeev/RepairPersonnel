import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNativeStack } from "./HomeNativeStack";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";
import { StackNames, TabStackList } from "./types";
import { FavoritesScreen, SendScreen } from '../screens';
import { ScreenNames } from '../screens/types';
import { View, Text } from 'react-native';
import { InfoNativeStack } from './InfoNativeStack';
import { ProfileNativeStack } from './ProfileNativeStack';


const TabNavigator = createBottomTabNavigator<TabStackList>();

export const TabNavigationStack = () => {
  return (
    <TabNavigator.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }
    }} >
      <TabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.icon}>
                <Entypo name="home" size={24} color={focused ? '#0081C6' : '#808080'} />
                <Text style={styles.text}>{ScreenNames.MAIN}</Text>
              </View>
            )
          },
        }}
        name={StackNames.HOME_STACK} component={HomeNativeStack}
      />
      <TabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.icon}>
                <Ionicons name="newspaper" size={24} color={focused ? '#0081C6' : '#808080'} />
                <Text style={styles.text}>{ScreenNames.INFO}</Text>
              </View>
            )
          },
        }}
        name={StackNames.INFO_STACK} component={InfoNativeStack} />

      <TabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.icon}>
                <FontAwesome name="plus-circle" size={40} color={focused ? '#0081C6' : '#808080'} />
                <Text style={styles.text}>{ScreenNames.ADD}</Text>
              </View>
            )
          },
        }}
        name={StackNames.SEND_STACK} component={SendScreen} />
      <TabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.icon}>
                <MaterialIcons name="favorite" size={24} color={focused ? '#0081C6' : '#808080'} />
                <Text style={styles.text}>{ScreenNames.FAVORITES}</Text>
              </View>
            )
          },
        }}
        name={StackNames.FAVORITES_STACK} component={FavoritesScreen} />
      <TabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.icon}>
                <MaterialCommunityIcons name="account" size={24} color={focused ? '#0081C6' : '#808080'} />
                <Text style={styles.text}>{ScreenNames.PROFILE}</Text>
              </View>
            )
          },
        }}
        name={StackNames.PROFILE_STACK} component={ProfileNativeStack} />
    </TabNavigator.Navigator >
  )
};