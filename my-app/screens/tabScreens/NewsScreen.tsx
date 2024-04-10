import { View, Text, SafeAreaView } from 'react-native';

import { ListNews } from '../../components';

import { styles } from "../styles"


export const NewsScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <ListNews />
      </View>
    </SafeAreaView>
  );
};
