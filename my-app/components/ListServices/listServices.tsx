
import { Animated, View, Image, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DB } from '../../firebase-config';
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import { styles } from './styles';



interface Service {
  image: string;
  title: string;
  code: string;
}



export const ListServices: React.FC = () => {

  const [value, setValue] = useState<Service[]>([]);


  const getDocument = async () => {
    const data: Service[] = []
    const q = query(collection(DB, "Services"), orderBy('id', 'asc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(doc.data() as Service)
    });
    setValue(data)

  }

  useEffect(() => {
    getDocument()
  }, [])

  return (
    <Animated.FlatList style={styles.wrapper}
      removeClippedSubviews={true}
      data={value}
      renderItem={({ item }: { item: Service }) => (
        <TouchableOpacity style={styles.contentWrapper}>
          <Image source={{ uri: item.image }} style={styles.img} />
          <View style={styles.title}>
            <Text style={styles.textTitle}>{item.title}</Text>
          </View>
          <View style={styles.code}>
            <Text style={styles.textCode}>{item.code}</Text>
          </View>
        </TouchableOpacity>
      )}
    />

  )
};

