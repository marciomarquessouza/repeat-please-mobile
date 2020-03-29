import React from 'react';
import {
	ButtonRounded,
	Logo,
	MessageWarning,
	TitleLogo,
	LinkButton,
} from 'repeat-please-styles';
import { Email, Password } from '../../../components';
import { ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { styles } from './styles';

export interface ILoginFormProps {
	hasError: boolean;
	errorMessage: string;
	email: string;
	forgotPassword: () => void;
	onEmailChange: (email: string) => void;
	password: string;
	onPasswordChange: (password: string) => void;
	handleLogin: () => void;
	isLoading: boolean;
}

export const LoginForm = ({
	hasError,
	errorMessage,
	email,
	forgotPassword,
	onEmailChange,
	password,
	onPasswordChange,
	handleLogin,
	isLoading,
}: ILoginFormProps): JSX.Element => (
	<KeyboardAvoidingView style={styles.wrapper} data-test="login">
		<ScrollView contentContainerStyle={styles.scrollStyle}>
			<View style={styles.container}>
				<Logo customStyle={styles.logoStyle} />
				<TitleLogo />
			</View>
			<View style={styles.container}>
				<Email email={email} onEmailChange={onEmailChange} />
				<Password
					password={password}
					onPasswordChange={onPasswordChange}
					onSubmited={handleLogin}
				/>
				{hasError && (
					<MessageWarning
						customStyle={styles.messageStyle}
						data-test="errorMessage">
						{errorMessage}
					</MessageWarning>
				)}
				<ButtonRounded
					onPress={handleLogin}
					isLoading={isLoading}
					style={styles.loginButtonStyle}>
					Login
				</ButtonRounded>
			</View>
			<View style={styles.container}>
				<View style={styles.container}>
					<LinkButton onPress={forgotPassword}>Forgot Password</LinkButton>
				</View>
			</View>
		</ScrollView>
	</KeyboardAvoidingView>
);
