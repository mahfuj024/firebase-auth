// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVD4zzBOmrId-fZ-LionnBUeU90AuWcw0",
    authDomain: "fir-auth-2a05b.firebaseapp.com",
    projectId: "fir-auth-2a05b",
    storageBucket: "fir-auth-2a05b.firebasestorage.app",
    messagingSenderId: "98373109966",
    appId: "1:98373109966:web:815a3b14cd77106142289f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;