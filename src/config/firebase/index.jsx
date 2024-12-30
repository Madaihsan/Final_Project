// import firebase from "firebase/app";
import 'firebase/auth'
// import 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAlkAPJkg2liCGJlcXCkA4lLMV-o0oTEPI",
    authDomain: "final-project-f10b3.firebaseapp.com",
    projectId: "final-project-f10b3",
    storageBucket: "final-project-f10b3.firebasestorage.app",
    messagingSenderId: "935991170895",
    appId: "1:935991170895:web:ec6eadc64ae30a34db973a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;