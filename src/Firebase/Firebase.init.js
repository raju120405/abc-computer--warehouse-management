// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcGOyYvBlD04EVrTzkuJH3CM41fMTn-iU",
  authDomain: "laptop-451bd.firebaseapp.com",
  projectId: "laptop-451bd",
  storageBucket: "laptop-451bd.appspot.com",
  messagingSenderId: "464558789114",
  appId: "1:464558789114:web:19ff42f45b1d7fd078d443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;