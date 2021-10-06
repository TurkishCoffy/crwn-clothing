import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAI-N-yC7yU0ePZlCxqwUUPxraBjAeVflg",
    authDomain: "crwn-db-c5044.firebaseapp.com",
    projectId: "crwn-db-c5044",
    storageBucket: "crwn-db-c5044.appspot.com",
    messagingSenderId: "306654323070",
    appId: "1:306654323070:web:1adf1df7fec5f06bdc932f",
    measurementId: "G-2YEWGKNVXL"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const sigInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;