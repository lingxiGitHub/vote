// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdh5tXKuYr3INzKmDvwJVBS8uPkK091t4",
  authDomain: "vote-my-decision.firebaseapp.com",
  projectId: "vote-my-decision",
  storageBucket: "vote-my-decision.appspot.com",
  messagingSenderId: "860203270502",
  appId: "1:860203270502:web:e96f539d62dcbc9aefc8a7",
  measurementId: "G-HXKW9CZPCG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore();

export default app;
