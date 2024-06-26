import { Animated, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DB } from '../../firebase-config';
import { addDoc, collection, deleteDoc, getDocs, orderBy, query, QueryDocumentSnapshot, QuerySnapshot, where } from 'firebase/firestore';
import { ScreenNames } from '../../screens/types';
import { styles } from './styles';
import firebase from 'firebase/compat';
import { MaterialIcons } from '@expo/vector-icons';

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

export const ListIncident: React.FC = () => {

  const navigation = useNavigation()
  const [favorites, setFavorites] = useState<string[]>([])
  const [newsPosts, setNewsPosts] = useState<Incident[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const handleToggleFavorite = async (item: Incident) => {
    try {
      const userFavoritesQuery = query(collection(DB, 'UsersFavorites'),
        where('userId', '==', currentUser!.uid),
        where('favorites.category', '==', item.category),
        where('favorites.description', '==', item.description),
        where('favorites.place', '==', item.place),
        where('favorites.date', '==', item.date),
      );

      const querySnapshot = await getDocs(userFavoritesQuery);
      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (doc: QueryDocumentSnapshot) => {
          await deleteDoc(doc.ref);
        });
        Alert.alert('Документ успешно удален из Избранного');
      } else {

        const userFavoritesRef = collection(DB, 'UsersFavorites');
        await addDoc(userFavoritesRef, { userId: currentUser!.uid, favorites: item });
        Alert.alert('Документ успешно добавлен в Избранное');
      }
    } catch (error) {
      Alert.alert('Ошибка при добавлении/удалении документа из Избранное:');
    }
  };




  const getCurrentUser = async () => {
    const user = firebase.auth().currentUser
    if (user) setCurrentUser({ uid: user.uid });
  };


  const onFocusScreen = useCallback(() => {
    GetNewsPosts()
    getCurrentUser()
    GetFavoritesPosts()
  }, []);

  useFocusEffect(onFocusScreen);

  useEffect(() => {
    GetNewsPosts()
    getCurrentUser()
    GetFavoritesPosts()
  }, [])

  const GetNewsPosts = async () => {
    try {
      const data: Incident[] = [];
      const q = query(collection(DB, 'NewsPost'), orderBy('createdAt', 'desc'));
      const querySnapshot: QuerySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
        data.push(doc.data() as Incident);
      });
      setNewsPosts(data);
    } catch (error) {
      console.error('Ошибка загрузки происшествий:', error);
    }
  };

  const GetFavoritesPosts = async () => {
    const data: any = [];
    try {
      const q = collection(DB, 'UsersFavorites');
      const querySnapshot: QuerySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
        if (doc.data().userId === currentUser?.uid) {
          data.push(doc.data().favorites.description);
        }
      });
      setFavorites(data);
    } catch (error) {
      console.error('Ошибка загрузки происшествий:', error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Происшествия</Text>
      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        removeClippedSubviews={true}
        data={newsPosts}
        renderItem={({ item }: { item: Incident }) => {
          const isFavorite = favorites.includes(item.description)
          return <TouchableOpacity style={styles.contentWrapper}
            onPress={() => { navigation.push(ScreenNames.DETAILS_INCIDENT, { incident: item }) }}
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
            <TouchableOpacity style={styles.favoritesWrapper} onPress={() => handleToggleFavorite(item)}>
              {isFavorite ? <MaterialIcons name="favorite" size={32} color="grey" /> : <MaterialIcons name="favorite-border" size={32} color="gray" />}
            </TouchableOpacity>
          </TouchableOpacity >
        }
        }
      />
    </View>
  )
}