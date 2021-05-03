// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyAObto75sBnqdwH4DlqXLrNKocaZtiTt1w",
    authDomain: "clone-3cf5c.firebaseapp.com",
    projectId: "clone-3cf5c",
    storageBucket: "clone-3cf5c.appspot.com",
    messagingSenderId: "62716973803",
    appId: "1:62716973803:web:c8d38ded7fa6d9fe73a4ae",
    measurementId: "G-7K4FTPWCH3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };