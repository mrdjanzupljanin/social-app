// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
