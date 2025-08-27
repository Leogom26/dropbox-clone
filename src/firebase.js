import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Se precisar
import { getStorage } from "firebase/storage"; // Se precisar

const firebaseConfig = {
  apiKey: "AIzaSyACgeT3-FPmmpBXRbl6bla9e8qlJ0HeWro",
  authDomain: "dropclone-f2add.firebaseapp.com",
  projectId: "dropclone-f2add",
  storageBucket: "dropclone-f2add.firebasestorage.app",
  messagingSenderId: "5333077389",
  appId: "1:5333077389:web:603ffd0591d20de00e81c4",
};

const app = initializeApp(firebaseConfig);

// Exporta o app ou outros serviços conforme necessário
export { app, getFirestore, getStorage };
