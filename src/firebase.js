import firebase from 'firebase/app'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBvfYZK4PGplo8-HvltuAD8jSEjSRz2FoM",
    authDomain: "crud-e7f46.firebaseapp.com",
    projectId: "crud-e7f46",
    storageBucket: "crud-e7f46.appspot.com",
    messagingSenderId: "241325657923",
    appId: "1:241325657923:web:6ef59f1d30432d2def69f6"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)