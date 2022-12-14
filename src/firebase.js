// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIHOUzGOrn7_YKrQR8tuTbB6q10gCRkQU",
  authDomain: "facebook-messanger-clone-e2e3e.firebaseapp.com",
  databaseURL: "https://facebook-messanger-clone-e2e3e.firebaseio.com",
  projectId: "facebook-messanger-clone-e2e3e",
  storageBucket: "facebook-messanger-clone-e2e3e.appspot.com",
  messagingSenderId: "48958937322",
  appId: "1:48958937322:web:b3eb2460b29b62ead89f93",
  measurementId: "G-6ZFPYKQNZD",
});

const db = firebaseApp.firestore();

export default db;
