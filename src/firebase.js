import { initializeApp } from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDG9zZ0SykplfrG1rwPYL8Q49WST1zNHAg",
    authDomain: "portfolio-contact-c95f5.firebaseapp.com",
    projectId: "portfolio-contact-c95f5",
    storageBucket: "portfolio-contact-c95f5.appspot.com",
    messagingSenderId: "135800253513",
    appId: "1:135800253513:web:352938f7a79914e14f6398"
};

const fireObj = initializeApp(firebaseConfig);

export default fireObj.database().ref();
