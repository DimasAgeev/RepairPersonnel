import { Animated, View, Image, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DB } from '../../firebase-config';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { DetailsNewsScreen, NewsScreen, ScreenNames } from '../../screens';
import { styles } from './styles';


export const ListNews = () => {

  const navigation = useNavigation()

  const [newsPosts, setNewsPosts] = useState([])

  //const onFocusScreen = useCallback(() => {
  //  GetNewsPosts()
  //}, []);

  //useFocusEffect(onFocusScreen);

  useEffect(() => {
    GetNewsPosts()
  }, [])

  const GetNewsPosts = async () => {
    const data = [];
    const querySnapshot = await getDocs(collection(DB, "NewsPost"), orderBy("createdAt", 'desc'))
    querySnapshot.forEach((doc) => {
      data.push(doc.data())
    });
    setNewsPosts(data)
  }

  return (
    <Animated.FlatList style={styles.wrapper}
      numColumns={2}
      removeClippedSubviews={true}
      data={newsPosts}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.contentWrapper}
          onPress={() => { navigation.push(ScreenNames.DETAILS_NEWS, { news: item }) }}
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
          </View>
          <View style={styles.textWrapper}>
            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={styles.textPlace}>{item.place}</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={styles.textCategory}>{item.category}</Text>
          </View>
        </TouchableOpacity >
      )}
    />
  )
}