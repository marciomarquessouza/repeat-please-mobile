import * as firebase from 'firebase';

export interface ISignInWithEmailPassword {
	userId: string;
}

export const signInWithEmailPassword = async (
	email: string,
	password: string,
): Promise<ISignInWithEmailPassword> => {
	try {
		const userCredential: firebase.auth.UserCredential = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);

		if (!userCredential || !userCredential.user) {
			throw new Error('Error to get the user id');
		}

		return { userId: userCredential.user.uid };
	} catch ({ message }) {
		throw new Error(message);
	}
};

export const forgotPassword = async (email: string): Promise<void> => {
	try {
		await firebase.auth().sendPasswordResetEmail(email);
	} catch ({ message }) {
		throw new Error('Error to send the reset email');
	}
};
