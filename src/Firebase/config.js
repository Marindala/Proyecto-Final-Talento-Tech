// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPOPRXy45V00wVOOW7_X5QHmv8lTuR9Ro",
  authDomain: "yosoyyo-tienda.firebaseapp.com",
  projectId: "yosoyyo-tienda",
  storageBucket: "yosoyyo-tienda.firebasestorage.app",
  messagingSenderId: "530145416869",
  appId: "1:530145416869:web:58af91029f1c9301325f4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)