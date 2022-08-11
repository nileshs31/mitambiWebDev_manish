import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVatCV_39gcRQc6odPVIuJBcfQ-nwfLn0",
  authDomain: "mitambi-internship.firebaseapp.com",
  databaseURL: "https://mitambi-internship-default-rtdb.firebaseio.com",
  projectId: "mitambi-internship",
  storageBucket: "mitambi-internship.appspot.com",
  messagingSenderId: "44499363256",
  appId: "1:44499363256:web:0e6d144dd422f215131b4d"
});

var db = firebaseApp.firestore();

export { db };
