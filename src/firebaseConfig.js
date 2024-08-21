// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYePCr5H3xiI79ycGUtxAimolaP8Y3EOQ",
  authDomain: "singaniaschool-63c16.firebaseapp.com",
  databaseURL: "https://singaniaschool-63c16-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "singaniaschool-63c16",
  storageBucket: "singaniaschool-63c16.appspot.com",
  messagingSenderId: "897230126545",
  appId: "1:897230126545:web:8dc0dabb94fd28205034f0",
  measurementId: "G-7JZK20L0WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Auth

export { app, analytics, db, auth }; // Export the auth module
