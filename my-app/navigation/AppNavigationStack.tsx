import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoginScreen, ScreenNames } from "../screens";
import { TabNavigationStack } from "./TabNavigationStack";
import { AppStackList, StackNames } from "./types";
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase-config';
import { NavigationContainer } from '@react-navigation/native';
import { setUser } from "../store/slices/user";
import { Loading } from "../components";


const AppNavigator = createNativeStackNavigator<AppStackList>();


export const AppNavigationStack = () => {
  const { user } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true);
  onAuthStateChanged(FIREBASE_AUTH, (user) => {
    dispatch(setUser(user))
    setTimeout(() => setLoading(false), 1000)
  })


  //const [user, setUser] = useState<User | null>(null);
  //const [loading, setLoading] = useState(true);
  //useEffect(() => {
  //  onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //    setUser(user)
  //    setTimeout(() => setLoading(false), 10)
  //  })
  //}, [])
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!loading ? <AppNavigator.Navigator
          screenOptions={{ headerShown: false }}>
          {user ?
            (<AppNavigator.Screen
              name={StackNames.TAB_STACK}
              component={TabNavigationStack} />)
            :
            (<AppNavigator.Screen
              name={ScreenNames.LOGIN}
              component={LoginScreen} />)}
        </AppNavigator.Navigator> : <Loading />}
      </NavigationContainer>
    </SafeAreaProvider>
  )
};