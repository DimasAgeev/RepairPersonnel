import { SafeAreaView, View, Text } from 'react-native';
import { styles } from "../styles"


export const SendScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Text>Send Screen</Text>
      </View>
    </SafeAreaView>
  );
};