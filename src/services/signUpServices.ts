import * as firebase from 'firebase';
import { USERS } from '../constants/collections';

interface ISignUpWithEmailPassword {
	userId: string;
}

export const signUpWithEmailPassword = async (user: {
	name: string;
	password: string;
	email: string;
}): Promise<ISignUpWithEmailPassword> => {
	try {
		const userCredentials: firebase.auth.UserCredential = await firebase
			.auth()
			.createUserWithEmailAndPassword(user.email, user.password);

		if (!userCredentials || !userCredentials.user) {
			throw Error('User unknown');
		}

		await userCredentials.user.updateProfile({
			displayName: user.name,
		});

		await firebase
			.firestore()
			.collection(USERS)
			.doc(userCredentials.user.uid)
			.set({
				name: user.name,
				email: user.email,
				username: '',
			});

		return { userId: userCredentials.user.uid };
	} catch (error) {
		throw new Error('Error to register the user');
	}
};
