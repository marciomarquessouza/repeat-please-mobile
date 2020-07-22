import { auth } from 'firebase';

export const createUserWithEmailPassword = async (
	email: string,
	password: string,
	name: string,
): Promise<void> => {
	try {
		const userCredentials = await auth().createUserWithEmailAndPassword(
			email,
			password,
		);

		if (!userCredentials || !userCredentials.user) {
			throw Error('User unknown');
		}

		userCredentials.user.updateProfile({
			displayName: name,
		});
	} catch (error) {
		throw Error(error);
	}
};
