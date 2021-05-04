import firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBrZ51YNwgWvL5tVl1bZZVZ-i7nRqKFzek",
    authDomain: "portafolio-contact-form-9bfbe.firebaseapp.com",
    projectId: "portafolio-contact-form-9bfbe",
    storageBucket: "portafolio-contact-form-9bfbe.appspot.com",
    messagingSenderId: "562181168527",
    appId: "1:562181168527:web:bd723a87e32afdeb7ffffa"
});

let db = firebaseApp.firestore();

export { db };