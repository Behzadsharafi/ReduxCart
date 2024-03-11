// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8yk8Czpyhboemf191g-MVUe06-aTAxvo",
  authDomain: "reduxcart-9ef98.firebaseapp.com",
  projectId: "reduxcart-9ef98",
  storageBucket: "reduxcart-9ef98.appspot.com",
  messagingSenderId: "721878705537",
  appId: "1:721878705537:web:ef757aa95e8d6af974b480",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
