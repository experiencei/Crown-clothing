import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDdjN2N2JT24RdxT1zVnaMdcHG6zKd7xto",
    authDomain: "crown-db-2a6b9.firebaseapp.com",
    projectId: "crown-db-2a6b9",
    storageBucket: "crown-db-2a6b9.appspot.com",
    messagingSenderId: "998464910088",
    appId: "1:998464910088:web:676130bd233f3def80b2bd",
    measurementId: "G-91KVXY9DN2"
  };

  firebase.initializeApp(config);
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;