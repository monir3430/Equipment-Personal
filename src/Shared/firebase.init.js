// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXP2pFWBTIbiNXAfqdlJpFDyFAOQls2Y",
  authDomain: "equipment-personal.firebaseapp.com",
  projectId: "equipment-personal",
  storageBucket: "equipment-personal.appspot.com",
  messagingSenderId: "821409264459",
  appId: "1:821409264459:web:c1f4ddd960df8859da2ece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;