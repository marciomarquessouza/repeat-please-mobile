import { auth } from 'firebase';

export const emailLogin = async (
	email: string,
	password: string,
): Promise<void> => {
	try {
		await auth().signInWithEmailAndPassword(email, password);
	} catch ({ message }) {
		throw new Error(message);
	}
};

export const passwordReset = async (email: string): Promise<void> => {
	try {
		await auth().sendPasswordResetEmail(email);
	} catch ({ message }) {
		throw new Error('Login Error');
	}
};
