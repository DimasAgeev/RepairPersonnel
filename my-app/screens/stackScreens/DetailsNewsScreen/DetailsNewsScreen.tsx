import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from './styles'


interface News {
  image: string;
  date: string;
  title: string;
  description: string;
  creator: string;
}

export const DetailsNewsScreen: React.FC = () => {
  const { params } = useRoute();
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    if (params && 'news' in params) {
      setNews(params.news as News);
    }
  }, [params]);

  return (
    <ScrollView >
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: news?.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{news?.date}</Text>
          <Text style={styles.title}>{news?.title}</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{news?.description}</Text>
          </View>
          <View style={styles.creatorWrapper}>
            <Text style={styles.creator}>{news?.creator}</Text>
          </View>
        </View>
      </View>
    </ScrollView>

  );
};