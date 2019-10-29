import firebase from 'firebase'

// Your web app's Firebase configuration
const app = firebase.initializeApp ({
  apiKey: "AIzaSyDS4jXPyRCTSZWuy_unuYjrY7n1uq3sJ54",
  authDomain: "library-ecce4.firebaseapp.com",
  databaseURL: "https://library-ecce4.firebaseio.com",
  projectId: "library-ecce4",
  storageBucket: "library-ecce4.appspot.com",
  messagingSenderId: "999598478933",
  appId: "1:999598478933:web:713994392d4e4bf33be6dc",
  measurementId: "G-8QP8BT2QPR"
})

export const db = app.firestore()