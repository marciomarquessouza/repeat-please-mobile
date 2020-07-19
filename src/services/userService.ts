import { auth } from 'firebase';
import { UserType } from '../../types/users';

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

export const getUsers = async (): Promise<UserType[]> => {
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			if (!response.ok) throw new Error('Error to fetch user');
			return response.json();
		})
		.then((json: any) => {
			return json.map((user: UserType) => ({
				id: user.id,
				name: user.name,
				email: user.email,
				username: user.username,
			}));
		});
};
