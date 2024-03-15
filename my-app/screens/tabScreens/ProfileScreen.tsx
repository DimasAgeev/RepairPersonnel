import { SafeAreaView, View, Text } from 'react-native';
import { styles } from "../styles"


export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};