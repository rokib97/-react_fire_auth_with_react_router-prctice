// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB61SL950laE45R2ocnELKg-7cU72udSLs",
  authDomain: "fire-auth-with-react-rou-e2a8e.firebaseapp.com",
  projectId: "fire-auth-with-react-rou-e2a8e",
  storageBucket: "fire-auth-with-react-rou-e2a8e.appspot.com",
  messagingSenderId: "803996019924",
  appId: "1:803996019924:web:d76eaa994eb731b74adf41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
