import { User, auth } from 'firebase';

export const createUserWithEmailPassword = async (
	email: string,
	password: string,
): Promise<User> => {
	try {
		const userCredentials = await auth().createUserWithEmailAndPassword(
			email,
			password,
		);

		if (!userCredentials || !userCredentials.user) {
			throw Error('User unknown');
		}

		return userCredentials.user;
	} catch (error) {
		throw Error(error);
	}
};
