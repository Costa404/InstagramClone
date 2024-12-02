// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2-QH7MNS8p-nRf15QYJuVo5bauYXiXDA",
  authDomain: "instagramclone-4cb2a.firebaseapp.com",
  projectId: "instagramclone-4cb2a",
  storageBucket: "instagramclone-4cb2a.firebasestorage.app",

  messagingSenderId: "279507432998",
  appId: "1:279507432998:web:fa039610bf891828c818e7",
  measurementId: "G-28QNNC2D79",
};

const app = initializeApp(firebaseConfig);

// Inicialize o Firestore
const db = getFirestore(app);

// Inicialize o Auth
const auth = getAuth(app);

// Inicialize o Storage
const storage = getStorage(app);

// Exporta os serviços
export { db, auth, storage };
