import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBUSCh0cj7f2T0DFZTON8tbCXp0HOd-rIc",
  authDomain: "test-26efd.firebaseapp.com",
  projectId: "test-26efd",
  storageBucket: "test-26efd.appspot.com",
  messagingSenderId: "1095634318958",
  appId: "1:1095634318958:web:03ec9c2a4762c38f93187f",

  // REQUIRED for Realtime Database
  databaseURL: "https://test-26efd-default-rtdb.firebaseio.com"
};

// Initialize
const firebaseDB = firebase.initializeApp(firebaseConfig);

// Export Database Reference
export default firebaseDB.database().ref();
