import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { styles } from './styles'


export const DetailsNewsScreen = () => {
  const { params } = useRoute();
  const [news, setNews] = useState([]);
  useEffect(() => {
    params && setNews(params.news)
  }, [params])


  const sendEmailMessage = () => {
    Linking.openURL('mailto:' + 'kvestnumber15@gmail.com')
  }

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: news.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Категория:</Text>
          <Text style={styles.textCategory}> {news.category}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Дата происшествия:</Text>
          <Text style={styles.text}> {news.date}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Место происшествия:</Text>
          <Text style={styles.text}> {news.place}</Text>
        </View>
        <View style={styles.textWrapperDescription}>
          <Text style={styles.title}>Описание происшествия:</Text>
          <Text numberOfLines={9} style={styles.text}> {news.description}</Text>
        </View>
        <TouchableOpacity onPress={() => sendEmailMessage()} style={styles.mesengerButton} >
          <Text style={styles.textButton}>
            Уточнить
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};