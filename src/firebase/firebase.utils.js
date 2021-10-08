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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();

     if(!snapShot.exists){
       const { displayName, email } = userAuth;
       const createdAt = new Date();

       try{
        await userRef.set({
          displayName,
          email,
          createdAt, 
          ...additionalData
        })
       }catch(error){
          console.log('error creating user', error.message)
       }
     }

     return userRef;
  }

  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;