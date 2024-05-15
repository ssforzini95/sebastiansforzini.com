// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export class Firebase {

    user;

    constructor () {
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Initialize Firebase
        const app = initializeApp({
            apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
            authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
            databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
            projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
        });
        const db = getFirestore(app);
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, import.meta.env.VITE_FIREBASE_EMAIL, import.meta.env.VITE_FIREBASE_PASSWORD)
        .then((userCredential) => {
            // Signed up 
            this.user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

        return db;

    }
}