import firebase from 'firebase/compat';
import { getAuth, signOut } from "firebase/auth";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, query, collection, getDocs, where } from "firebase/firestore";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { styles } from "../styles"
import { DB } from '../../firebase-config';
import { ScreenNames } from '../types';

interface IUser {
  imageURL: string,
  userId: string,
}


export const ProfileScreen: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [user, setUser] = useState<IUser | null>();
  const [image, setImage] = useState<string | null>(null);
  const storage = getStorage();
  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(() => { getUsersImageURL() }, [currentUser?.uid])
  useEffect(() => { getCurrentUser() }, [])


  const getCurrentUser = async () => {
    const user = firebase.auth().currentUser

    if (user) setCurrentUser(user);
  };

  const onFocusScreen = useCallback(() => {
    getCurrentUser()

  }, []);

  useFocusEffect(onFocusScreen);

  const logOut = () => {
    signOut(auth)
  }

  const uploadImageFromCamera = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync(
        {
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [4, 1],
          quality: 1,
        }
      )
      if (!result.canceled) {
        await saveImage(result.assets[0].uri)
      }
    } catch (error) {
      console.error('Ошибка при загрузке фото:', error);
    }

  };

  const saveImage = async (image: string | null) => {
    try {
      setImage(image)
    } catch (error) {
      console.error('Ошибка при сохранении фото:', error);
    }
  }

  const removeImage = async () => {
    try {
      saveImage(null)
    } catch {

    }
  }

  const onSubmitMethod = async (imageUri: string | null) => {
    try {
      if (!imageUri) return;
      const resp = await fetch(imageUri);
      const blob = await resp.blob();
      const storageRef = ref(storage, `users/${Date.now()}.jpg`);
      uploadBytes(storageRef, blob).then((snapshot) => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          imageUri = downloadURL;
          const usersRef = collection(DB, 'Users');
          await addDoc(usersRef, { userId: currentUser?.uid, imageURL: imageUri });
          console.log(imageUri);
        });
      });
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error);
    }
  }

  const getUsersImageURL = async () => {
    if (currentUser?.uid) {
      const data: any[] = [];
      const q = query(collection(DB, "Users"), where('userId', '==', currentUser.uid),)
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      });
      setUser(data[0])
    }
  }

  const link = image || user?.imageURL

  return (
    <View style={styles.wrapperProile}>
      <View style={styles.wrapperCircle}>
        <View style={styles.circleProile}>
          {link ? <Image
            source={{ uri: link }}
            style={styles.circleProile}
          /> : <Text style={styles.titleCircle}>{currentUser?.email?.[0]}</Text>}
        </View>
        <TouchableOpacity onPress={() => removeImage()} style={styles.delete}>
          <MaterialCommunityIcons name="delete" size={40} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => uploadImageFromCamera()} style={styles.upload}>
          <MaterialIcons name="add-a-photo" size={40} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSubmitMethod(image)} style={styles.save}>
          <MaterialCommunityIcons name="content-save-move" size={40} color="grey" />
        </TouchableOpacity>
      </View>
      <View style={styles.display}>
        <Text style={styles.displayName}>{currentUser?.displayName}</Text>
      </View>

      <Text style={styles.titleInfo}>Персональные данные</Text>


      <View style={[styles.personalInfo, { width: '100%' }]}>
        <View style={styles.infoWrapper}>
          <View style={styles.textWrapper}>
            <MaterialCommunityIcons name="email-multiple-outline" size={24} color="grey" />
            <Text style={styles.textInfo}>Почта:</Text>
          </View>
          <Text style={styles.textContent}>{currentUser?.email}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.textWrapper}>
            <AntDesign name="exclamationcircleo" size={24} color="grey" />
            <Text style={styles.textInfo}>Имя:</Text>
          </View>
          <Text style={styles.textContent}>{currentUser?.displayName}</Text>
        </View>
      </View>

      <Text style={styles.titleInfo}>Утилиты</Text>
      <View style={[styles.personalInfo, { width: '100%' }]}>
        <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.PERSONAL_DATA)} style={styles.infoWrapper}>
          <View style={styles.textWrapper}>
            <MaterialIcons name="person" size={24} color="grey" />
            <Text style={styles.textInfo}>Изменить персональные данные</Text>
          </View>
          <AntDesign name="doubleright" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logOut()} style={styles.infoWrapper}>
          <View style={styles.textWrapper}>
            <MaterialCommunityIcons name="exit-run" size={24} color="grey" />
            <Text style={styles.textInfo}>Выйти из профиля</Text>
          </View>
          <AntDesign name="doubleright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};