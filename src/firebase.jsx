import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNM1wo21gC1KqFombozDP9JJZ5SqVVL3w",
  authDomain: "react-notes-app-2b538.firebaseapp.com",
  projectId: "react-notes-app-2b538",
  storageBucket: "react-notes-app-2b538.appspot.com",
  messagingSenderId: "553722009559",
  appId: "1:553722009559:web:a9f6a056bf5e60db1add92"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")