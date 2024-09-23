import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyCNM1wo21gC1KqFombozDP9JJZ5SqVVL3w",
//   authDomain: "https://react-notes-app-2b538-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   projectId: "react-notes-app-2b538",
//   storageBucket: "react-notes-app-2b538.appspot.com",
//   messagingSenderId: "553722009559",
//   appId: "1:553722009559:web:a9f6a056bf5e60db1add92"
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyCNM1wo21gC1KqFombozDP9JJZ5SqVVL3w",
  authDomain: "react-notes-app-2b538.firebaseapp.com",
  databaseURL: "https://react-notes-app-2b538-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-notes-app-2b538",
  storageBucket: "react-notes-app-2b538.appspot.com",
  messagingSenderId: "553722009559",
  appId: "1:553722009559:web:a9f6a056bf5e60db1add92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")