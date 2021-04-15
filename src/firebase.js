  import firebase from 'firebase/app'
  import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCgA7i2OEM14JHlpEiPIUnZrAARZgwWVJ4",
    authDomain: "labnoteselle.firebaseapp.com",
    projectId: "labnoteselle",
    storageBucket: "labnoteselle.appspot.com",
    messagingSenderId: "915092999202",
    appId: "1:915092999202:web:55ac154d60e9f189afce7b"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)

export const db = fb.firestore();

