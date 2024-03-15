import { SafeAreaView, View, Text } from 'react-native';
import { styles } from "../styles"


export const FavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Text>Favorites Screen</Text>
      </View>
    </SafeAreaView>
  );
};