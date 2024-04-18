import { Animated, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DB } from '../../firebase-config';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { ScreenNames } from '../../screens/types';
import { styles } from './styles';



interface ICategory {
  name: string,
  id: number,
  icon: string,
}

interface CategoryProps {
  category: ICategory[],
}


export const ListCategory: React.FC<CategoryProps> = ({ category }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Категории</Text>
      <Animated.FlatList
        data={category}
        numColumns={4}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() =>
            navigation.navigate(ScreenNames.DETAILS_CATEGORY, { category: item.name })}
            style={styles.contentWrapper}>
            <Text style={styles.text}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}