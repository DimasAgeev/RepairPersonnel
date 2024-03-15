import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

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
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)