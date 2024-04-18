import { SafeAreaView, View, ScrollView } from 'react-native';
import { Header, ListFavorites, ListNews } from '../../components';
import { styles } from "../styles"


export const FavoritesScreen = () => {
  return (
    <ScrollView >
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <Header />
          <ListFavorites />
        </View>
      </View>
    </ScrollView>
  );
};