// firebase.js (modular)
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACgeT3-FPmmpBXRbl6bla9e8qlJ0HeWro",
  authDomain: "dropclone-f2add.firebaseapp.com",
  projectId: "dropclone-f2add",
  storageBucket: "dropclone-f2add.appspot.com",
  messagingSenderId: "5333077389",
  appId: "1:5333077389:web:603ffd0591d20de00e81c4",
  // databaseURL: "https://dropclone-f2add.firebaseio.com", // necessário para o Realtime DB
};

const app = initializeApp(firebaseConfig);

// 🔥 exporte os serviços que quiser usar
export { app, getDatabase, getFirestore, getStorage };
