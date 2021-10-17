// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
require('dotenv').config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "ecommerce-web-applicatio-51490.firebaseapp.com",
  projectId: "ecommerce-web-applicatio-51490",
  storageBucket: "ecommerce-web-applicatio-51490.appspot.com",
  messagingSenderId: "722027240037",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-0J01B3ZCTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app