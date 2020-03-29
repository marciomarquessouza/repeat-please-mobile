import React, { useContext } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import { googleLoginConfig } from '../../../config.homolog';
import { GoogleButton as GoogleBtnComponent } from 'repeat-please-styles';
import { AlertsContext } from '../../contexts/AlertsContext';
import { ViewStyle } from 'react-native';
import { auth } from 'firebase';

interface ILoginProps {
	children: string;
	style?: ViewStyle;
}

export const GoogleButton = ({ children, style }: ILoginProps): JSX.Element => {
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

	return (
		<GoogleBtnComponent {...{ onPress, style }}>{children}</GoogleBtnComponent>
	);
};
