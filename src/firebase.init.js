// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/auth";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQRQemrTDZDyG-dVoGqjfqKFP82gOQl0",
  authDomain: "ema-john-simple-e57ce.firebaseapp.com",
  projectId: "ema-john-simple-e57ce",
  storageBucket: "ema-john-simple-e57ce.appspot.com",
  messagingSenderId: "854786931386",
  appId: "1:854786931386:web:ac57e4a973397c63dea083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;