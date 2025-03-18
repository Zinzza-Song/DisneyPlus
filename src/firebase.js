import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9moeUf_qsoyRbJZ2gKiTvpBZ6ThgEreQ",
  authDomain: "react-disney-plus-app-3004e.firebaseapp.com",
  projectId: "react-disney-plus-app-3004e",
  storageBucket: "react-disney-plus-app-3004e.firebasestorage.app",
  messagingSenderId: "881104351319",
  appId: "1:881104351319:web:cb0dbda48ef92fc54ef312",
};

const app = initializeApp(firebaseConfig);

export default app;
