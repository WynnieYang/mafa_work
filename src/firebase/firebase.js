import firebase from 'firebase/app';

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

firebase.initializeApp(firebaseConfig);

export default firebase;