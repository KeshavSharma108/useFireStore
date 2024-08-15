// firebaseConfig.js
import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyC88isw1L5oq0jx6zsybNQuACsSqvEYvGE",
    authDomain: "fblogin-11a6b.firebaseapp.com",
    projectId: "fblogin-11a6b",
    storageBucket: "fblogin-11a6b.appspot.com",
    messagingSenderId: "252293985262",
    appId: "1:252293985262:web:7713ce0e26ac14432a94ff",
    measurementId: "G-NZGW67PS78"
};

const app = initializeApp(firebaseConfig);

  

const db = getFirestore(app)
export { db }
