import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXpD743lpG4nlUEIFHBGAd-RtNZHeaark",
  authDomain: "realestateproject-d2822.firebaseapp.com",
  projectId: "realestateproject-d2822",
  storageBucket: "realestateproject-d2822.firebasestorage.app",
  messagingSenderId: "323442309225",
  appId: "1:323442309225:web:848064983bebabf7d90af8",
  measurementId: "G-ND1MVCRJ6J"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export  { auth, db};