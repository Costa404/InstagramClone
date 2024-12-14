import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

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

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { db, auth, storage };
