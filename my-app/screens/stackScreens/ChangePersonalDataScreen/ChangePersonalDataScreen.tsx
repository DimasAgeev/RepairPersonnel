import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Alert, TextInput } from 'react-native';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { DB } from '../../../firebase-config';
import { styles } from './styles'
import { ScreenNames } from '../../types';
import { Loading } from '../../../components';
import { Formik } from 'formik';
import { getAuth, updatePassword, updateProfile, signOut } from 'firebase/auth';

interface FormValues {
  displayName: string;
}




export const ChangePersonalDataScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const onSubmitMethod = async (values: FormValues, { resetForm }) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: values.displayName,
      });
      setLoading(false);
      resetForm({ displayName: '', password: '' });
      Alert.alert('Профиль успешно обновлен');
    } catch (error) {
      setLoading(false);
      Alert.alert('Ошибка при сохранении данных', error.message);
    }
  };

  return (
    <View style={[styles.wrapper, { width: '100%' }]}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>
          Введите данные
        </Text>
      </View>

      <KeyboardAvoidingView behavior='position'>
        <Formik
          initialValues={{ displayName: '', password: '' }}
          onSubmit={onSubmitMethod}

          validate={(values) => {
            const errors: Partial<FormValues> = {}



            if (!values.displayName) {
              errors.displayName = 'Введите имя (максимум 15 символов)';
            } else if (values.displayName.length > 15) {
              errors.displayName = 'Слишком длинное имя';
            }
            return errors
          }}
        >
          {({ handleChange, handleSubmit, values, errors }) => (

            <ScrollView contentContainerStyle={{
              alignItems: 'center',
              width: '100%',
              padding: 10,
              justifyContent: 'space-between',
            }}>
              <View style={styles.inputWrapper}>
                <Text style={styles.text}>
                  Имя
                </Text>
                <TextInput
                  style={styles.input}
                  value={values?.displayName}
                  onChangeText={handleChange('displayName')}
                  maxLength={15}
                  placeholder='Введите имя' />
                <Text style={styles.textError}>{errors.displayName}</Text>
              </View>

              <TouchableOpacity style={loading ? styles.uploadLoadingButton : styles.uploadButton} onPress={handleSubmit}
                disabled={loading}
              >
                {loading ? <Loading /> : <Text style={styles.textButton}>
                  Сохранить данные
                </Text>}
              </TouchableOpacity>
            </ScrollView>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View >
  )
}