import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { ActivityIndicator, View } from 'react-native';

import { useState, useEffect } from 'react';
import { LoginScreen, ScreenNames } from "../screens";
import { TabNavigationStack } from "./TabNavigationStack";
import { User } from 'firebase/auth';
import { AppStackList, StackNames } from "./types";
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase-config';
import { NavigationContainer } from '@react-navigation/native';






const AppNavigator = createNativeStackNavigator<AppStackList>();
export const AppNavigationStack = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
      setTimeout(() => setLoading(false), 10)
    })
  }, [])
  return (
    <NavigationContainer>
      {!loading ? <AppNavigator.Navigator
        screenOptions={{ headerShown: false }}>
        {user ? (<AppNavigator.Screen
          name={StackNames.TAB_STACK}
          component={TabNavigationStack} />) : (<AppNavigator.Screen
            name={ScreenNames.LOGIN}
            component={LoginScreen} />)}
      </AppNavigator.Navigator> :
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size='large' color='#0081C6' /></View>}
    </NavigationContainer>
  )
};