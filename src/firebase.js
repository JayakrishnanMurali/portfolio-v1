import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyAB1vQW31exRf__-mp7bh9vVJbJAAHMUY8",
  authDomain: "portfolio-adfa9.firebaseapp.com",
  projectId: "portfolio-adfa9",
  storageBucket: "portfolio-adfa9.appspot.com",
  messagingSenderId: "492073644820",
  appId: "1:492073644820:web:b6118c5e2f82eda7840801",
  measurementId: "G-DF70WLP9SF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
