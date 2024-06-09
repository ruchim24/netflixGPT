// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDH270Cxg66IYE0Wlto8EQ6ksmqEVU8CQ",
  authDomain: "netflixgpt-83298.firebaseapp.com",
  projectId: "netflixgpt-83298",
  storageBucket: "netflixgpt-83298.appspot.com",
  messagingSenderId: "55430749697",
  appId: "1:55430749697:web:f7a2317b68d74dcb2f2a00",
  measurementId: "G-3G7PPRRFJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();