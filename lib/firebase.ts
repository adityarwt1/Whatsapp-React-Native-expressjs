// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6p0MgbwikL4RMHhfC6k8ip02_89YvjYQ",
  authDomain: "whatsap-clone-c889b.firebaseapp.com",
  databaseURL:
    "https://whatsap-clone-c889b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsap-clone-c889b",
  storageBucket: "whatsap-clone-c889b.firebasestorage.app",
  messagingSenderId: "99979674018",
  appId: "1:99979674018:web:ae857b37f2a376ea0072fb",
  measurementId: "G-05VL4FVBZP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

