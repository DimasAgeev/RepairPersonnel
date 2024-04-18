import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Animated, Alert } from 'react-native';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { DB } from '../../../firebase-config';
import { styles } from './styles'
import { ScreenNames } from '../../types';
import { Loading } from '../../../components';


interface RouteParams {
  category: string;
}



interface Incident {
  image: string;
  description: string;
  date: string;
  place: string;
  category: string;
}


export const DetailsCategoryScreen: React.FC = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as RouteParams;

  const [categoryList, setCategoryList] = useState<Incident[]>([]);
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    params && getListByCategory()
  }, [params])


  const getListByCategory = async () => {
    try {
      setLoading(true)
      const q = query(collection(DB, "NewsPost"), where('category', '==', params.category))
      const querySnapshot = await getDocs(q);
      const categoryList: Incident[] = [];
      querySnapshot.forEach((doc) => {
        categoryList.push(doc.data() as Incident);
      });
      setCategoryList(categoryList);
      setLoading(false)
    } catch (error) {
      Alert.alert('Ошибка загрузки категорий');
    }
  }




  return (
    <View style={styles.wrapper}>
      {loading ? <Loading /> :
        categoryList?.length > 0 ? <Animated.FlatList
          numColumns={2}
          removeClippedSubviews={true}
          data={categoryList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.contentWrapper}
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
        /> : <Text style={styles.textError}>Проишествий не найдено</Text>}
    </View>
  );
};