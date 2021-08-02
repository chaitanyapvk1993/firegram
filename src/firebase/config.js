// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBbPfUqGHYqwGzT3FTAPBK63oav5m-gqig",
    authDomain: "firegram-110e7.firebaseapp.com",
    projectId: "firegram-110e7",
    storageBucket: "firegram-110e7.appspot.com",
    messagingSenderId: "643999546502",
    appId: "1:643999546502:web:98ffb6bcf4c0d98b1c2507"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export{projectStorage,projectFirestore,timestamp};