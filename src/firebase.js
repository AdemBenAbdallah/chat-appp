import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVxy_JpqsxS9Rp_Nl7uSs2JiYtXgSgAy0",
  authDomain: "chat-7d382.firebaseapp.com",
  projectId: "chat-7d382",
  storageBucket: "chat-7d382.appspot.com",
  messagingSenderId: "825423823346",
  appId: "1:825423823346:web:fd75df1efa857219686b6b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
