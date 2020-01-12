import { auth } from 'firebase';
import { AccessToken, LoginManager, LoginResult } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';
import { googleLoginConfig } from '../../../config.homolog';

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

export const facebookLogin = (): void => {
	try {
		LoginManager.logInWithPermissions(['public_profile', 'email'])
			.then((result: LoginResult) => {
				if (result.isCancelled) {
					throw new Error('The user cancelled the request');
				}
				return AccessToken.getCurrentAccessToken();
			})
			.then(data => {
				if (!data || !data.accessToken) {
					throw new Error('Facebook server error');
				}
				const credential = auth.FacebookAuthProvider.credential(
					data.accessToken,
				);
				return auth().signInWithCredential(credential);
			});
	} catch ({ message }) {
		throw new Error(message);
	}
};

export const googleLogin = async (): Promise<void> => {
	try {
		await GoogleSignin.configure(googleLoginConfig);
		const data = await GoogleSignin.signIn();
		const credential = auth.GoogleAuthProvider.credential(
			data.idToken,
			data.serverAuthCode,
		);
		auth().signInWithCredential(credential);
	} catch ({ message }) {
		throw new Error(message);
	}
};
