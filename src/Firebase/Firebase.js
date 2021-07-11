import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwrxXwxACsq4OgchT_QMYmE9Aqs6MmfnQ",
  authDomain: "clone-new-e6265.firebaseapp.com",
  projectId: "clone-new-e6265",
  storageBucket: "clone-new-e6265.appspot.com",
  messagingSenderId: "529838504080",
  appId: "1:529838504080:web:e704848107e1e2bd9a8015",
  measurementId: "G-81YNS5F6BM",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
