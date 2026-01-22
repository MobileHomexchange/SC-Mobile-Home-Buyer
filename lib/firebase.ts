import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Project credentials for scmobilehomebuyer-67a73
const firebaseConfig = {
  apiKey: "AIzaSyCi0WS3M43vf7_XM-rbz6UOlvn7OucjUag",
  authDomain: "scmobilehomebuyer-67a73.firebaseapp.com",
  projectId: "scmobilehomebuyer-67a73",
  storageBucket: "scmobilehomebuyer-67a73.firebasestorage.app",
  messagingSenderId: "408595119908",
  appId: "1:408595119908:web:be2351764f77525cc5fdb1",
  measurementId: "G-6W9VQ02JW0"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize and export Auth service via modular getter
export const auth = getAuth(app);
export default app;