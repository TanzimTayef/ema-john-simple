// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA2k6wcPAjvpCmLsyAlvirTjHuMXOaAoY",
  authDomain: "ema-john-simple-6f282.firebaseapp.com",
  projectId: "ema-john-simple-6f282",
  storageBucket: "ema-john-simple-6f282.appspot.com",
  messagingSenderId: "917385872350",
  appId: "1:917385872350:web:7e05b6066c8323ced6134f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;