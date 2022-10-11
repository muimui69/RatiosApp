// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: "AIzaSyCUkaT8gkDtiHm3MBfjdcx6TLjuwX1IbK4",
  authDomain: "ratios-app.firebaseapp.com",
  databaseURL: "https://ratios-app-default-rtdb.firebaseio.com",
  projectId: "ratios-app",
  storageBucket: "ratios-app.appspot.com",
  messagingSenderId: "497337383028",
  appId: "1:497337383028:web:a681e667ce52887556f921",
  measurementId: "G-1YS1RK2V0S"
};

// Initialize Firebase
export const app = initializeApp(FirebaseConfig);
export const auth = getAuth(app);