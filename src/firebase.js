import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwZIPbGzWNom9H2bm0gZt75IJINz-ZXuk",
    authDomain: "react-blog-app-eea2e.firebaseapp.com",
    projectId: "react-blog-app-eea2e",
    storageBucket: "react-blog-app-eea2e.appspot.com",
    messagingSenderId: "847893963232",
    appId: "1:847893963232:web:94206f04061d1981890b85",
    measurementId: "G-0XSRHCDJ8X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage,auth};