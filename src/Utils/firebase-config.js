// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5XqdMKOjieIZyVQgenmUj5PErMFXNYp0",
  authDomain: "react-netflix-clone-e0d2e.firebaseapp.com",
  projectId: "react-netflix-clone-e0d2e",
  storageBucket: "react-netflix-clone-e0d2e.appspot.com",
  messagingSenderId: "122593443581",
  appId: "1:122593443581:web:fdf046b3e823e75b24c894",
  measurementId: "G-BRMZ824DC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);