import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAde7QYOW6JpIJ262AsyFhmqeNj_N9veH4",
  authDomain: "bike-app-f79be.firebaseapp.com",
  projectId: "bike-app-f79be",
  storageBucket: "bike-app-f79be.appspot.com",
  messagingSenderId: "759871849651",
  appId: "1:759871849651:web:15de59d50fc3a9435b5cc6",
  measurementId: "G-55MD3F7LKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
