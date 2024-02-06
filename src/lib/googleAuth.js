import { auth } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export function signInWithGoogle() {
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider)
		.then((result) => {
			// User signed in successfully.
			// @ts-ignore
			return result.user;
			// TODO: Handle the authenticated user.
		})
		.catch((error) => {
			// Handle errors
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// TODO: Handle errors.
		});
}
