// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD9J5yXhDQErQj4BJ1HC1QrOqgiCZd_IY",
  authDomain: "inventory-management-dd699.firebaseapp.com",
  projectId: "inventory-management-dd699",
  storageBucket: "inventory-management-dd699.appspot.com",
  messagingSenderId: "868858608391",
  appId: "1:868858608391:web:3b4158f8a3732d57e523a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}