// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBQftnOXS2vkJVl4Rxp6G-GxlIpiMj5bp0",
  authDomain: "learn-react-00.firebaseapp.com",
  databaseURL: "https://learn-react-00-default-rtdb.firebaseio.com",
  projectId: "learn-react-00",
  storageBucket: "learn-react-00.appspot.com",
  messagingSenderId: "465292536466",
  appId: "1:465292536466:web:975e4aae0fb8069efa944b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
