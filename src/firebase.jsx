// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_REACT_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID
}


// const firebaseConfig = {
//   apiKey: "AIzaSyCUjvnmvbEBzCgnF1hqiJjGY-IV-zeYzD8",
//   authDomain: "amber-port-dev.firebaseapp.com",
//   projectId: "amber-port-dev",
//   storageBucket: "amber-port-dev.appspot.com",
//   messagingSenderId: "451831357793",
//   appId: "1:451831357793:web:2037a5bdf4590bc0b4e520",
//   measurementId: "G-142RYQ0YQ9"
// };

// Initialize Firebase
console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
  
export default app