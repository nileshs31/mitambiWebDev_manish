import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVatCV_39gcRQc6odPVIuJBcfQ-nwfLn0",
  authDomain: "mitambi-internship.firebaseapp.com",
  projectId: "mitambi-internship",
  storageBucket: "mitambi-internship.appspot.com",
  messagingSenderId: "44499363256",
  appId: "1:44499363256:web:0e6d144dd422f215131b4d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
