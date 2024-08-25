// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEvMfQ8NnZRzk2N87oR6d_antqTjqVRak",
  authDomain: "educonnect-hub.firebaseapp.com",
  databaseURL: "https://educonnect-hub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "educonnect-hub",
  storageBucket: "educonnect-hub.appspot.com",
  messagingSenderId: "561612330722",
  appId: "1:561612330722:web:cb1c0f71bef0934f4730bb",
  measurementId: "G-5S8R08MYT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth }; // Export all initialized modules