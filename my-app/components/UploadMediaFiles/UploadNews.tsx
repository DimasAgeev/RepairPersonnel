import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, KeyboardAvoidingView, SafeAreaView, Alert, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DB } from '../../firebase-config'
import { styles } from './styles';
import { scaleSize } from '../../utirls';
import { Picker } from '@react-native-picker/picker'
import { Formik, ErrorMessage } from 'formik';
import { addDoc, collection, getDocs } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useUser } from '@clerk/clerk-expo';
import { Loading } from '../Loading/loading';

export const UploadNews = () => {


  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);
  const storage = getStorage();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    GetCategory()
  }, [])

  const GetCategory = async () => {
    setCategory([]);
    const querySnapshot = await getDocs(collection(DB, "Categories"));
    querySnapshot.forEach((doc) => {
      setCategory(category => [...category, doc.data()])
    });
  }

  const pikImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const onSubmitMethod = async (value) => {
    setLoading(true)

    const resp = await fetch(image)
    const blob = await resp.blob()
    const storageRef = ref(storage, 'news/' + Date.now() + '.jpg')

    uploadBytes(storageRef, blob).then((snapshot) => {
    }).then((resp) => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        value.image = downloadURL

        const docRef = await addDoc(collection(DB, 'NewsPost'), value)
        if (docRef.id) {
          setLoading(false);
          Alert.alert('Информация успешно загружена и будет опубликована в разделе новости полсе модерации')
        }
      })
    })
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>
          Сообщите новость
        </Text>
      </View>
      <SafeAreaView>
        <KeyboardAvoidingView behavior='position'>
          <Formik
            initialValues={{ category: '', date: '', place: '', description: '', image: '', createdAt: Date.now() }}
            onSubmit={value => onSubmitMethod(value)}
            validate={(value) => {
              const errors = {}

              if (!value.date) {
                errors.date = 'Введите дату'
              } else if (!/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/.test(value.date)) {
                errors.date = 'Неверный формат даты'
              }

              if (!value.description) {
                errors.description = 'Введите описание max: 500 символов'
              }
              if (!value.place) {
                errors.place = 'Введите место происшествия'
              }
              return errors
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

              <ScrollView contentContainerStyle={{
                alignItems: 'center',
                width: '100%',
                padding: 10,
                justifyContent: 'space-between',
              }}>

                <View style={styles.choice}>
                  <Text style={styles.text}>
                    Выберите фото и категорию происшествия
                  </Text>
                </View>

                <View style={styles.container}>
                  <TouchableOpacity onPress={pikImage}>
                    <View style={styles.imageContainer}>
                      {image ?
                        <Image
                          source={{ uri: image }}
                          style={styles.image}
                        /> : <Image
                          source={require('../../assets/placeholderImage.jpg')}
                          style={styles.image}
                        />}
                    </View>
                  </TouchableOpacity>
                  <Picker
                    style={styles.dropdown}
                    selectedValue={values?.category}
                    onValueChange={handleChange('category')}>
                    {category && category.map((item, index) => (
                      <Picker.Item key={index} label={item?.name} value={item?.name} />
                    ))}
                  </Picker>

                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.text}>
                    Описание
                  </Text>
                  <TextInput
                    style={styles.inputDescription}
                    value={values?.description}
                    onChangeText={handleChange('description')}
                    multiline
                    editable
                    numberOfLines={4}
                    maxLength={500}
                    textAlignVertical={'top'}
                    placeholder='Опишите проишествие' />
                  <Text style={styles.textError}>{errors.description}</Text>
                </View>




                <View style={styles.inputWrapper}>
                  <Text style={styles.text}>
                    Дата
                  </Text>
                  <TextInput
                    style={styles.input}
                    keyboardType='numbers-and-punctuation'
                    value={values?.date}
                    onChangeText={handleChange('date')}
                    placeholder='Укажите дату происшествия ДД.ММ.ГГГГ ' />
                  <Text style={styles.textError}>{errors.date}</Text>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.text}>
                    Место
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values?.place}
                    onChangeText={handleChange('place')}
                    placeholder='Укажите место проишествия' />
                  <Text style={styles.textError}>{errors.place}</Text>
                </View>




                <TouchableOpacity style={loading ? styles.uploadLoadingButton : styles.uploadButton} onPress={handleSubmit}
                  disabled={loading}
                >
                  {loading ? <Loading /> : <Text style={styles.textButton}>
                    Отправить
                  </Text>}
                </TouchableOpacity>

              </ScrollView>

            )}

          </Formik>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View >

  )
}