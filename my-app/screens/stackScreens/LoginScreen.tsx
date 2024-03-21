import { TextInput, Image, View, Text, ImageBackground, ScrollView, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { BlurView } from 'expo-blur';
import * as React from 'react';
import { styles } from "../styles"
import { useState } from 'react';
import { FIREBASE_AUTH } from '../../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';



export const LoginScreen = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();



  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
     }
    catch (error: any) {
      alert('Регистрация провалена: ' + error.message)
    }
    finally {
      setLoading(false);
    }
  }


  const signUp = async () => {
    setLoading(true);
    try {
      const respons = await createUserWithEmailAndPassword(auth, email, password)
      console.log(respons)

    }
    catch (error: any) {
      console.log(error)
      alert('Введите корректные данные!!! ' + error.message)
    }
    finally {
      setLoading(false);
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
            {loading ? (<ActivityIndicator size='large' color='#0081C6' />) : (<View>
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