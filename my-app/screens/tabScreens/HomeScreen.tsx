import { SafeAreaView, View, Alert, TouchableOpacity, Image } from 'react-native';
import { styles } from "../styles"
import { NavigationProp } from '@react-navigation/native';
import { Header, ListCategory, ListIncident, ListNews, ListServices } from '../../components';
import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { DB } from '../../firebase-config';

interface NewsPost {
  description: string,
  id: number,
  image: string,
  short: string,
  title: string,
}
interface ICategory {
  name: string,
  id: number,
  icon: string,
}


export const HomeScreen: React.FC = () => {

  const [newsPosts, setNewsPosts] = useState<NewsPost[]>([])
  const [category, setCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    getNewsPosts();
    getCategory();
  }, []);



  const getCategory = async () => {
    try {
      const querySnapshot = await getDocs(collection(DB, "Categories"));
      const categoryPosts: ICategory[] = [];
      querySnapshot.forEach((doc) => {
        categoryPosts.push(doc.data() as ICategory);
      });
      setCategory(categoryPosts);
    } catch (error) {
      Alert.alert('Ошибка загрузки категорий', error);
    }
  }


  const getNewsPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(DB, "Slider"));
      const sliderPosts: NewsPost[] = [];
      querySnapshot.forEach((doc) => {
        sliderPosts.push(doc.data() as NewsPost);
      });
      setNewsPosts(sliderPosts);
    } catch (error) {
      Alert.alert('Ошибка загрузки новостей', error);
    }
  };



  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={styles.contentWrapper}>
        <ListNews newsPosts={newsPosts} />
        <ListCategory category={category} />
        <ListIncident />
      </View>
    </View>
  );
};