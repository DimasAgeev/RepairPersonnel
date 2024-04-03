import { SafeAreaView, View, Text } from 'react-native';
import { Header, UploadNews, } from '../../components';
import { styles } from "../styles"


export const SendScreen = () => {
  return (
    <View style={styles.contentWrapper}>
      <UploadNews />
    </View>
  );
};