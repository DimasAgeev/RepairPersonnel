import { TextInput, Image, View, Text, ImageBackground, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import * as React from 'react';
import { styles } from "../styles"



export const LoginScreen = () => {




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
        <BlurView intensity={40} style={styles.login}>
          <Image source={require('../../assets/splash.png')} style={styles.image} />
          <View>
            <Text style={styles.text}>
              E-mail
            </Text>
            <TextInput style={styles.input} placeholder='E-mail' />

          </View>
          <View>
            <Text style={styles.text}>
              Password
            </Text>
            <TextInput style={styles.input} placeholder='Password' />
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>
                Войти
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>
                Регистрация
              </Text>
            </TouchableOpacity>
          </View>

        </BlurView>
      </ScrollView>

    </View>
  );
};