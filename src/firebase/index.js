// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfSdqRv4ik96iThFQGB-oFAT_uE1x2KSQ",
  authDomain: "react-crud-45292.firebaseapp.com",
  projectId: "react-crud-45292",
  storageBucket: "react-crud-45292.firebasestorage.app",
  messagingSenderId: "188060794176",
  appId: "1:188060794176:web:89b098f2cd1bc98adbcea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore();

export {db};