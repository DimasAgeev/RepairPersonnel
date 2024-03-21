import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = {
  apiKey: "AIzaSyB7mQDB-rXWsOdVNYgPsB7PtzwjkN5OuRg",
  authDomain: "repairpersonnel-d6391.firebaseapp.com",
  projectId: "repairpersonnel-d6391",
  storageBucket: "repairpersonnel-d6391.appspot.com",
  messagingSenderId: "184865017265",
  appId: "1:184865017265:web:259809e90d9528d6660190"
};

// Initialize Firebase



export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


//initializeAuth(FIREBASE_APP, {
//  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//});