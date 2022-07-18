import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrp-iej5izH1FXjo9hgf7cJLm466bvhy0",
  authDomain: "asemble-adventure.firebaseapp.com",
  projectId: "asemble-adventure",
  storageBucket: "asemble-adventure.appspot.com",
  messagingSenderId: "989160494103",
  appId: "1:989160494103:web:2d9d6d38cc447281603852",
  measurementId: "G-SLEKF71G10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
