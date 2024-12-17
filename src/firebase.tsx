import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCCI5Y2h6ww5L2mpSNE_bVbI7bHGakrgmI",

  authDomain: "mysocialnetwork-960dc.firebaseapp.com",

  projectId: "mysocialnetwork-960dc",

  storageBucket: "mysocialnetwork-960dc.firebasestorage.app",

  messagingSenderId: "16898638835",

  appId: "1:16898638835:web:26f3c9f7d36be1bc338886",

  measurementId: "G-0GDGX83XJE",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { db, auth, storage };
