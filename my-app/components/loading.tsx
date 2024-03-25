import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';


export const Loading = () => {
  return (
    <View style={styles.wrapper}>
      < ActivityIndicator size='large' color='#0081C6' />
    </View>
  );
}