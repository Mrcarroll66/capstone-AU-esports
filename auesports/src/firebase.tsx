import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZFqNoDZ3B-73HrKdMoPfAqu7g94K7YoY",
    authDomain: "esports-au.firebaseapp.com",
    databaseURL: "https://esports-au-default-rtdb.firebaseio.com",
    projectId: "esports-au",
    storageBucket: "esports-au.appspot.com",
    messagingSenderId: "406875651699",
    appId: "1:406875651699:web:16ea1b4bdc14ce8b077406",
    measurementId: "G-M17BB6NY36"
  };

  const app = initializeApp(firebaseConfig);

  export default getFirestore();