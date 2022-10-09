import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD5YWmzK0t7bDjS4U_9GsMmo9O5nyM8GDU",
    authDomain: "disney-clone-d9e6a.firebaseapp.com",
    projectId: "disney-clone-d9e6a",
    storageBucket: "disney-clone-d9e6a.appspot.com",
    messagingSenderId: "552186412968",
    appId: "1:552186412968:web:171fa332fcc981c0e9e79d",
    measurementId: "G-Q37MLM3D7N"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;