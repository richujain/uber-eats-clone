import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnaZ0wepFQwUBhYk8eaOe5Mtg2zW4HqUI",
    authDomain: "uber-eats-clone-react-na-c18a4.firebaseapp.com",
    projectId: "uber-eats-clone-react-na-c18a4",
    storageBucket: "uber-eats-clone-react-na-c18a4.appspot.com",
    messagingSenderId: "514887059833",
    appId: "1:514887059833:web:b6b02280ac7b31daa147a8"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;
