import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzZ3lDfG2Q88gOg5ozxcHzYUgT-y8KkQw",
  authDomain: "authentication-70f96.firebaseapp.com",
  projectId: "authentication-70f96",
  storageBucket: "authentication-70f96.appspot.com",
  messagingSenderId: "1025299968707",
  appId: "1:1025299968707:web:2679a54ece251f1cdf2876",
  measurementId: "G-CXMS8SGGB9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const database = getFirestore(app);
export { auth, database };