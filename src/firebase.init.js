import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
  
  // apiKey: "AIzaSyCl5rEhFvx6ECHT1aOe78r8IvOmG65PGrc",
  // authDomain: "movies-auth-1.firebaseapp.com",
  // projectId: "movies-auth-1",
  // storageBucket: "movies-auth-1.firebasestorage.app",
  // messagingSenderId: "773809902",
  // appId: "1:773809902:web:4534229338890ed8a075ff",

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app);
