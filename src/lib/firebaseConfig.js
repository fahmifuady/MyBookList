// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC5_vHUzo1TQ6o123mK_TJkOHqGuZe2ewQ',
	authDomain: 'mybooklist-pemweb.firebaseapp.com',
	projectId: 'mybooklist-pemweb',
	storageBucket: 'mybooklist-pemweb.appspot.com',
	messagingSenderId: '651415476068',
	appId: '1:651415476068:web:e7d974dad13c68d90fcc71',
	measurementId: 'G-NHQK0EQV3N'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the auth service
export const auth = getAuth(app);

// Get a reference to the Firestore service
export const db = getFirestore(app);
