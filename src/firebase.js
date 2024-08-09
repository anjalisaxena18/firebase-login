// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBClbU_3u_y1Ppq9HRPDxcyzbe6Oj6-XRw",
  authDomain: "anjali18-05-2002.firebaseapp.com",
  projectId: "anjali18-05-2002",
  storageBucket: "anjali18-05-2002.appspot.com",
  messagingSenderId: "15875421983",
  appId: "1:15875421983:web:a39292d2d409fa5ef4e22a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;