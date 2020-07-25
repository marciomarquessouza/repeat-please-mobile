import * as firebase from 'firebase';
import { UserType } from '../../types/users';
import { USERS } from '../constants/collections';

export const getUser = async (userId: string): Promise<UserType> => {
	try {
		const document = await firebase
			.firestore()
			.collection(USERS)
			.doc(userId)
			.get();

		if (!document.exists) {
			throw new Error("Document doesn't exists");
		}
		const data: any = document.data();
		return {
			id: document.id,
			username: '',
			name: data.name,
			email: data.email,
		};
	} catch (error) {
		throw new Error(`Erro to fetch the user: ${error}`);
	}
};
