import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4u36TQYhjGMRSXh2ivbeoiqjmnetgLJY",
  authDomain: "chat-app-b29dd.firebaseapp.com",
  projectId: "chat-app-b29dd",
  storageBucket: "chat-app-b29dd.firebasestorage.app",
  messagingSenderId: "211665347686",
  appId: "1:211665347686:web:aac2ab45fab45f10b5f9a7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
