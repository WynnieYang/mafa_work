// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuJgEe73qCbK8tFm5S5KB09lKv4DLyWKs",
  authDomain: "wynniefirst.firebaseapp.com",
  databaseURL: "https://wynniefirst-default-rtdb.firebaseio.com",
  projectId: "wynniefirst",
  storageBucket: "wynniefirst.appspot.com",
  messagingSenderId: "383747205573",
  appId: "1:383747205573:web:c06202de140002594fc3ac",
  measurementId: "G-1T8SFZYF62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);