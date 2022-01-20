import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBhCGsydDb0tye4xmmQDSUzoRk2o06RR10",
    authDomain: "portfolio-contact-ce4c3.firebaseapp.com",
    projectId: "portfolio-contact-ce4c3",
    storageBucket: "portfolio-contact-ce4c3.appspot.com",
    messagingSenderId: "842172602250",
    appId: "1:842172602250:web:234d6064d9ecc1e85ada73",
    measurementId: "G-TEEJ0DNN95"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
