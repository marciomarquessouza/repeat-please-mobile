import React, { useState } from 'react';
// import { AccessToken, LoginManager, LoginResult } from 'react-native-fbsdk';
import { FacebookButton as FacebookBtnComponent } from 'repeat-please-styles';
import { ViewStyle } from 'react-native';
// import { AlertsContext } from '../../contexts/AlertsContext';
// import { auth } from 'firebase';

interface ILoginProps {
	children: string;
	style?: ViewStyle;
}

export const FacebookButton = ({
	children,
	style,
}: ILoginProps): JSX.Element => {
	// const { showAlert } = useContext(AlertsContext);
	const [isLoading] = useState(false);

	const onPress = () => {
		// setLoading(true);
		// LoginManager.logInWithPermissions(['public_profile', 'email'])
		// 	.then((result: LoginResult) => {
		// 		if (result.isCancelled) {
		// 			throw new Error('Action Canceled');
		// 		}
		// 		return AccessToken.getCurrentAccessToken();
		// 	})
		// 	.then(data => {
		// 		if (!data || !data.accessToken) {
		// 			throw new Error('Facebook server error');
		// 		}
		// 		const credential = auth.FacebookAuthProvider.credential(
		// 			data.accessToken,
		// 		);
		// 		auth().signInWithCredential(credential);
		// 	})
		// 	.catch(({ message: facebookError }) => {
		// 		setLoading(false);
		// 		const message = facebookError || 'Login Error';
		// 		showAlert({ message, type: 'error' });
		// 	});
	};

	return (
		<FacebookBtnComponent {...{ onPress, style, isLoading }}>
			{children}
		</FacebookBtnComponent>
	);
};
