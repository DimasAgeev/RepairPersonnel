import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from "../styles"
import { NavigationProp } from '@react-navigation/native';
import { Header, ListServices } from '../../components';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}


export const HomeScreen = ({ navigation }: RouterProps) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header />
      <View style={styles.contentWrapper}>
        <ListServices />
      </View>
    </SafeAreaView>
  );
};