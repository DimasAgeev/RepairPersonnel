import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from "../styles"
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebase-config';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}


export const HomeScreen = ({ navigation }: RouterProps) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => { FIREBASE_AUTH.signOut() }} style={styles.button}>
          <Text style={styles.text}>
            Выйти
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};