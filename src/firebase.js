// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9moeUf_qsoyRbJZ2gKiTvpBZ6ThgEreQ",
  authDomain: "react-disney-plus-app-3004e.firebaseapp.com",
  projectId: "react-disney-plus-app-3004e",
  storageBucket: "react-disney-plus-app-3004e.firebasestorage.app",
  messagingSenderId: "881104351319",
  appId: "1:881104351319:web:cb0dbda48ef92fc54ef312",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
