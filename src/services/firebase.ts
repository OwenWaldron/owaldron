import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjbQHw30vplgheCe76tkM_uPtagN4ReY0",
    authDomain: "owaldron-logbook.firebaseapp.com",
    projectId: "owaldron-logbook",
    storageBucket: "owaldron-logbook.firebasestorage.app",
    messagingSenderId: "808430592875",
    appId: "1:808430592875:web:ad241fd06344b0e957222e",
    measurementId: "G-XJM56ZPH3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
