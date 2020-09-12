import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNUWhKejCXHord_rkYV6y-WBBBCwALc8U",
  authDomain: "clone-dbcd6.firebaseapp.com",
  databaseURL: "https://clone-dbcd6.firebaseio.com",
  projectId: "clone-dbcd6",
  storageBucket: "clone-dbcd6.appspot.com",
  messagingSenderId: "698803982027",
  appId: "1:698803982027:web:633890c344cdf7543ed54e",
  measurementId: "G-XTZ4EV5K3S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
