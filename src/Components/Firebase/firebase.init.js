import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDApSnXiwbubfpfJrDNQaPHPkH8JHbifvM",
  authDomain: "toy-universe-3b566.firebaseapp.com",
  projectId: "toy-universe-3b566",
  storageBucket: "toy-universe-3b566.firebasestorage.app",
  messagingSenderId: "1023054543241",
  appId: "1:1023054543241:web:2c6d887e70b2dc5a538958",
  measurementId: "G-D33P8WZ8SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)