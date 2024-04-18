import { Animated, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DB } from '../../firebase-config';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { ScreenNames } from '../../screens/types';
import { styles } from './styles';



interface NewsPost {
  description: string,
  id: number,
  image: string,
  short: string,
  title: string,
}

interface NewsProps {
  newsPosts: NewsPost[],
}


export const ListNews: React.FC<NewsProps> = ({ newsPosts }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={true}
          horizontal
          data={newsPosts}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.content}
              onPress={() => { navigation.push(ScreenNames.DETAILS_NEWS, { news: item }) }}
            >
              <Image source={{ uri: item.image }} style={styles.img} />
              <Text
                numberOfLines={3}
                ellipsizeMode='tail'
                style={styles.text}>{item.short}</Text>
            </TouchableOpacity >
          )}
        />
      </View>
    </View>
  )
}