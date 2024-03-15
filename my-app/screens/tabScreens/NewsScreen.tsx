import { SafeAreaView, View, Text } from 'react-native';
import { styles } from "../styles"


export const NewsScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Text>News Screen</Text>
      </View>
    </SafeAreaView>
  );
};