import { TextInput, Image, View, Text, ImageBackground, ScrollView, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { BlurView } from 'expo-blur';
import * as React from 'react';
import { styles } from "../styles"
import { useState } from 'react';
import { FIREBASE_AUTH } from '../../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '../../components';
import { setUserLoading } from '../../store/slices/user';


export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userLoading } = useSelector((state: any) => state.user)
  const auth = FIREBASE_AUTH;

  const dispatch = useDispatch();

  const signIn = async () => {
    dispatch(setUserLoading(true))
    try {
      await signInWithEmailAndPassword(auth, email, password)
    }
    catch (error: any) {
      alert('Регистрация провалена: ' + error.message)
    }
    finally {
      dispatch(setUserLoading(false))
    }
  }

  const signUp = async () => {
    dispatch(setUserLoading(true))
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password,)
    }
    catch (error: any) {
      alert('Введите корректные данные!!! ' + error.message)
    }
    finally {
      dispatch(setUserLoading(false))
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.background}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/background.jpeg')}
          alt="image"
        />
      </View>
      <ScrollView contentContainerStyle={{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}>
        <KeyboardAvoidingView behavior='padding'>
          <BlurView intensity={40} style={styles.login}>
            <Image source={require('../../assets/splash.png')} style={styles.logo} />
            <View>
              <Text style={styles.text}>
                E-mail
              </Text>
              <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='E-mail' />
            </View>
            <View>
              <Text style={styles.text}>
                Password
              </Text>
              <TextInput secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='Password' />
            </View>
            {userLoading ? (<Loading />) : (<View>
              <TouchableOpacity onPress={signIn} style={styles.button}>
                <Text style={styles.text}>
                  Войти
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={signUp} style={styles.button}>
                <Text style={styles.text}>
                  Регистрация
                </Text>
              </TouchableOpacity>
            </View>)}
          </BlurView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View >
  );
};