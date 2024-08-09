// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth"; // Import Firebase Authentication module

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAh-JQSITv0AMuSNnsn7UpLgfCfqiz7gCs",
//   authDomain: "singaniaschool.firebaseapp.com",
//   databaseURL: "https://singaniaschool-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "singaniaschool",
//   storageBucket: "singaniaschool.appspot.com",
//   messagingSenderId: "227941803547",
//   appId: "1:227941803547:web:362bc161b7b1c942fc3abe",
//   measurementId: "G-LJKWFPFG4D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firebase Authentication
// const auth = getAuth(app);

// // Now `auth` can be used for Firebase Authentication operations
// // For example:
// // const provider = new GoogleAuthProvider();
// // signInWithPopup(auth, provider);

// export { app, analytics, auth }; // Export if needed


// Import the functions you need from the SDKs you need
// src/firebaseConfig.js
// src/firebaseConfig.js
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAh-JQSITv0AMuSNnsn7UpLgfCfqiz7gCs",
//   authDomain: "singaniaschool.firebaseapp.com",
//   databaseURL: "https://singaniaschool-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "singaniaschool",
//   storageBucket: "singaniaschool.appspot.com",
//   messagingSenderId: "227941803547",
//   appId: "1:227941803547:web:362bc161b7b1c942fc3abe",
//   measurementId: "G-LJKWFPFG4D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth, app, analytics };

// src/firebaseConfig.js

// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAh-JQSITv0AMuSNnsn7UpLgfCfqiz7gCs",
//   authDomain: "singaniaschool.firebaseapp.com",
//   databaseURL: "https://singaniaschool-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "singaniaschool",
//   storageBucket: "singaniaschool.appspot.com",
//   messagingSenderId: "227941803547",
//   appId: "1:227941803547:web:362bc161b7b1c942fc3abe",
//   measurementId: "G-LJKWFPFG4D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Add this import
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYePCr5H3xiI79ycGUtxAimolaP8Y3EOQ",
  authDomain: "singaniaschool-63c16.firebaseapp.com",
  projectId: "singaniaschool-63c16",
  storageBucket: "singaniaschool-63c16.appspot.com",
  messagingSenderId: "897230126545",
  appId: "1:897230126545:web:8dc0dabb94fd28205034f0",
  measurementId: "G-7JZK20L0WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);  // Initialize Firestore and assign to 'db'

export { app, analytics, db };  // Export 'db' along with other services




