// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAffj1VwjRqVrCL1kSv1nPo5QfyIuqoyo",
  authDomain: "alphabi-236aa.firebaseapp.com",
  projectId: "alphabi-236aa",
  storageBucket: "alphabi-236aa.appspot.com",
  messagingSenderId: "512811046505",
  appId: "1:512811046505:web:16be80dafd0bac5ad6b4f8",
  measurementId: "G-MY79TTQ8ZM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default function () {
  <>Nothing is here!</>;
}