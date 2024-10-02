// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSIpH246naXsXzHcT5I1hU9gmOjYCeFwk",
  authDomain: "todo-list-joki.firebaseapp.com",
  projectId: "todo-list-joki",
  storageBucket: "todo-list-joki.appspot.com",
  messagingSenderId: "351786781954",
  appId: "1:351786781954:web:7a2b25ba6170a2bbffc61b"
};

// Initialize Firebase
export const FREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FREBASE_APP);