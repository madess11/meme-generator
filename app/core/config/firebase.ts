import { initializeApp } from 'firebase/app';
import { getStorage, ref as storageRef } from "firebase/storage"
import { getDatabase } from "firebase/database";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp4KqHjaGKk6VOIWjcjax4haO8azuYfp8",
  authDomain: "meme-generator-2dcea.firebaseapp.com",
  projectId: "meme-generator-2dcea",
  storageBucket: "meme-generator-2dcea.appspot.com",
  messagingSenderId: "326519197235",
  appId: "1:326519197235:web:13bfd8d69d09e9fd5e9d46",
  measurementId: "G-9PT6HEEWE4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const firebaseStorage = getStorage(firebaseApp)
const firebaseDatabase = getDatabase(firebaseApp)

export {  firebaseApp, firebaseDatabase,  firebaseStorage, storageRef }