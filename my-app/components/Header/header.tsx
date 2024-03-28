import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import moment from 'moment';
import { FIREBASE_AUTH } from '../../firebase-config';
import { useEffect } from 'react';


export const Header = () => {
  const currentDate = moment().format("DD.MM.YYYY");

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Сегодня: <Text style={styles.date}>{currentDate}</Text></Text>
      <TouchableOpacity onPress={() => { FIREBASE_AUTH.signOut() }} style={styles.exit}>
        <Image style={styles.icon} source={require('../../assets/exit.png')}
          alt="image"></Image>

      </TouchableOpacity>
    </View>
  )
}