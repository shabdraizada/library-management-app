import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB1mljVkCoFJKsa9mJcupGWs-eyuQDI48o",
  authDomain: "willyapp-3f980.firebaseapp.com",
  databaseURL: "https://willyapp-3f980.firebaseio.com",
  projectId: "willyapp-3f980",
  storageBucket: "willyapp-3f980.appspot.com",
  messagingSenderId: "914366785626",
  appId: "1:914366785626:web:b653fa4d2faf657ec19063"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
