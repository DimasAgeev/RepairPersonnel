import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Linking, Share } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './styles'







export const DetailsIncidentScreen = ({ navigation }) => {
  const { params } = useRoute();
  const [incident, setIncident] = useState({});

  useEffect(() => {
    params.incident && setIncident(params.incident)
    shareButton()
  }, [params, navigation])

  const shareButton = () => {
    navigation.setOptions({
      headerRight: () => (
        <EvilIcons name="share-google"
          onPress={() => shareIncident()}
          size={24} color="black" />
      )
    })
  }

  const shareIncident = async () => {
    const content = {
      message: params.incident.category +
        '\n' + params.incident.date +
        '\n' + params.incident.place +
        '\n' + params.incident.description +
        '\n' + 'Фото происшествия можно посмотреть по ссылке:' +
        '\n' + params.incident.image,
    }
    Share.share(content)
  }

  const sendEmailMessage = () => {
    Linking.openURL('mailto:' + 'test15@gmail.com')
  }

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: incident.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Категория:</Text>
          <Text style={styles.textCategory}> {incident.category}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Дата происшествия:</Text>
          <Text style={styles.text}> {incident.date}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Место происшествия:</Text>
          <Text style={styles.text}> {incident.place}</Text>
        </View>
        <View style={styles.textWrapperDescription}>
          <Text style={styles.title}>Описание происшествия:</Text>
          <Text numberOfLines={9} style={styles.text}> {incident.description}</Text>
        </View>
        <TouchableOpacity onPress={() => sendEmailMessage()} style={styles.mesengerButton} >
          <Text style={styles.textButton}>
            Уточнить
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};