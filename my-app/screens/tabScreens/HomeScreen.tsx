import { SafeAreaView, View, Text } from 'react-native';
import { styles } from "../styles"


export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};