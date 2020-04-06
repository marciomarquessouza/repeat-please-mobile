import React, { useState, useContext } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { LinkButton } from 'repeat-please-styles';
import { LoginForm } from './components';
import { FORGOT_PASSWORD, REGISTER } from '../../navigator/routes';
import { NavigationStackProp } from 'react-navigation-stack';
import { AlertsContext } from '../../contexts/AlertsContext';
import { emailIsValid } from '../../utils/validations';
import { emailLogin } from '../../data/services/login';
import { styles } from './style';

interface ILoginProps {
	navigation: NavigationStackProp;
}

export const Login = ({ navigation }: ILoginProps): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { showAlert } = useContext(AlertsContext);

	const onSubmitEmail = (): boolean => {
		if (emailIsValid(email)) return true;
		showAlert({ type: 'error', message: 'Invalid Email' });
		return false;
	};

	const onSubmitPassword = async () => {
		setIsLoading(true);
		try {
			await emailLogin(email, password);
		} catch (error) {
			showAlert({ type: 'error', message: error.message });
			setIsLoading(false);
		}
	};

	const onForgotPasswordPress = (): void => {
		navigation.navigate(FORGOT_PASSWORD, { email });
	};

	const onSignUpPress = (): void => {
		navigation.navigate(REGISTER);
	};

	return (
		<SafeAreaView style={styles.container}>
			<LoginForm
				onEmailChange={emailText => setEmail(emailText)}
				onEmailSubmit={() => onSubmitEmail()}
				onPassChange={passText => setPassword(passText)}
				onPassSubmit={onSubmitPassword}
				navigation={navigation}
				isLoading={isLoading}
			/>
			<LinkButton
				customStyle={styles.forgotPasswordStyle}
				onPress={onForgotPasswordPress}>
				Forgot Password
			</LinkButton>
			<View style={styles.signUpContainer}>
				<Text style={[styles.signUpText, { color: '#fff' }]}>
					Don't have an account?
				</Text>
				<TouchableOpacity onPress={onSignUpPress}>
					<Text style={[styles.signUpText, { color: '#000' }]}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};
