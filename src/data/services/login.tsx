import React, { useContext } from 'react';
import { ViewStyle } from 'react-native';
import { auth } from 'firebase';
import { AccessToken, LoginManager, LoginResult } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';
import { googleLoginConfig } from '../../../config.homolog';
import { FacebookButton, GoogleButton } from 'repeat-please-styles';
import { AlertsContext } from '../../contexts/AlertsContext';

interface ILoginProps {
	children: string;
	style?: ViewStyle;
}

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

export const FacebookLogin = ({
	children,
	style,
}: ILoginProps): JSX.Element => {
	const { showAlert } = useContext(AlertsContext);
	const onPress = () => {
		LoginManager.logInWithPermissions(['public_profile', 'email'])
			.then((result: LoginResult) => {
				if (result.isCancelled) {
					throw new Error('Action Canceled');
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
			})
			.catch(({ message: facebookError }) => {
				const message = facebookError || 'Login Error';
				showAlert({ message, type: 'error' });
			});
	};

	return <FacebookButton {...{ onPress, style }}>{children}</FacebookButton>;
};

export const GoogleLogin = ({ children, style }: ILoginProps): JSX.Element => {
	const { showAlert } = useContext(AlertsContext);

	const onPress = async () => {
		try {
			await GoogleSignin.configure(googleLoginConfig);
			const data = await GoogleSignin.signIn();
			const credential = auth.GoogleAuthProvider.credential(
				data.idToken,
				data.serverAuthCode,
			);
			auth().signInWithCredential(credential);
		} catch ({ code }) {
			const message = code === '-5' ? 'Action Canceled' : 'Login Error';
			showAlert({ message, type: 'error' });
		}
	};

	return <GoogleButton {...{ onPress, style }}>{children}</GoogleButton>;
};

export const passwordReset = async (email: string): Promise<void> => {
	try {
		await auth().sendPasswordResetEmail(email);
	} catch ({ message }) {
		throw new Error('Login Error');
	}
};
