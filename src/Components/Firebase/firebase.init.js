import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW3SH47-jlaODvKyz9O4HosdWWtV_cjAA",
  authDomain: "gamehub-2bc5c.firebaseapp.com",
  projectId: "gamehub-2bc5c",
  storageBucket: "gamehub-2bc5c.firebasestorage.app",
  messagingSenderId: "381767461911",
  appId: "1:381767461911:web:edd2c3b3c6b1789dbe0052",
  measurementId: "G-EMWBVGGWGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)