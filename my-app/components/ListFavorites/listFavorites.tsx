import { Animated, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DB } from '../../firebase-config';
import { addDoc, collection, deleteDoc, getDocs, orderBy, query, QueryDocumentSnapshot, QuerySnapshot, where } from 'firebase/firestore';
import { ScreenNames } from '../../screens/types';
import { styles } from './styles';
import firebase from 'firebase/compat';
import { AppStackList } from '../../navigation/types';

interface Incident {
  image: string;
  description: string;
  date: string;
  category: string;
  place: string;
}

interface User {
  uid: string;
}

export const ListFavorites: React.FC = () => {

  const { navigate } = useNavigation<any>()

  const [newsPosts, setNewsPosts] = useState<Incident[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isFavorites, setIsFavorites] = useState<boolean>(false);

  const getCurrentUser = async () => {
    const user = firebase.auth().currentUser
    if (user) setCurrentUser({ uid: user.uid });
  };


  const onFocusScreen = useCallback(() => {
    GetFavoritesPosts()
    getCurrentUser()
  }, []);

  useFocusEffect(onFocusScreen);

  useEffect(() => {
    GetFavoritesPosts()
    getCurrentUser()
  }, [])

  const GetFavoritesPosts = async () => {
    try {
      const data: any = [];
      const q = collection(DB, 'UsersFavorites');
      const querySnapshot: QuerySnapshot = await getDocs(q);

      console.log('current', currentUser)
      querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
        console.log('UsersFavorites', doc.data())
        if (doc.data().userId = currentUser) {
          data.push(doc.data().favorites);
        }

      });
      setNewsPosts(data);

    } catch (error) {
      console.error('Ошибка загрузки происшествий:', error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Избранное</Text>
      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        removeClippedSubviews={true}
        data={newsPosts}
        renderItem={({ item }: { item: Incident }) => (
          <TouchableOpacity style={styles.contentWrapper}
            onPress={() => { navigate(ScreenNames.DETAILS_INCIDENT, { incident: item }) }}
          >
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={styles.textWrapper}>
              <Text
                numberOfLines={1}
                ellipsizeMode='tail'
                style={styles.textDescription}>{item.description}</Text>
            </View>
            <View style={styles.textWrapper}>
              <Text
                numberOfLines={1}
                ellipsizeMode='tail'
                style={styles.textPlace}>{item.date}</Text>
              <View style={styles.textWrapperCategory}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode='tail'
                  style={styles.textCategory}>{item.category}</Text>
              </View>

            </View>
            <View style={styles.textWrapper}>
              <Text
                numberOfLines={1}
                ellipsizeMode='tail'
                style={styles.textPlace}>{item.place}</Text>
            </View>
          </TouchableOpacity >
        )}
      />
    </View>
  )
}