import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyAA0T1ymjlPLTtV_jm5wLc-Wi1lnp7jaJg",
    authDomain: "valkiria-ecommerce.firebaseapp.com",
    projectId: "valkiria-ecommerce",
    storageBucket: "valkiria-ecommerce.appspot.com",
    messagingSenderId: "779117810615",
    appId: "1:779117810615:web:e0402d28c8243e4c1a8e32"
}

const app = firebase.initializeApp(firebaseConfig);

export const dataBase = app.firestore();