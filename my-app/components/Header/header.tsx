import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import moment from 'moment';


export const Header: React.FC = () => {
  const currentDate = moment().format("DD.MM.YYYY");
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Сегодня: <Text style={styles.date}>{currentDate}</Text></Text>
    </View>
  )
}