import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, } from 'react-native';
import { } from 'firebase/firestore';
import { styles } from './styles'


interface RouteParams {
  category: string;
}



interface Incident {
  image: string;
  description: string;
  date: string;
  place: string;
  category: string;
}


export const ChangePasswordScreen: React.FC = () => {


  //const handleUpdatePassword = () => {
  //  if (newPassword) {
  //    currentUser?.updatePassword(newPassword)
  //      .then(() => {
  //        console.log('Password updated successfully');
  //      })
  //      .catch(error => {
  //        console.error('Error updating password:', error);
  //      });
  //  }
  //};

  return (
    <View style={styles.wrapper}>
      <Text>Изменить</Text>
    </View>
  );
};