import { View, TextInput, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { DB } from '../../firebase-config';
import { ListServices } from '../../components';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { styles } from "../styles"



interface SliderPost {
  description: string,
  id: number,
  image: string,
  short: string,
  title: string,
}

export const InfoScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <ListServices />
      </View>
    </SafeAreaView>
  );
};
