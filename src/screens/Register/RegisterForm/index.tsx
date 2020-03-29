import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { ButtonRounded, MessageWarning, TitleLogo } from 'repeat-please-styles';
import { RegisterInput } from '../RegisterInput';
import { styles } from './styles';

export interface IRegisterFormProps {
	email: string;
	errorMessage: string;
	handleRegister: () => void;
	handleFacebookLogin: () => void;
	handleGoogleLogin: () => void;
	hasError: boolean;
	isLoading: boolean;
	name: string;
	onEmailChange: (email: string) => void;
	onNameChange: (name: string) => void;
	onPassRepeatChange: (password: string) => void;
	onPasswordChange: (password: string) => void;
	passRepeat: string;
	password: string;
}

export class RegisterForm extends Component<IRegisterFormProps, {}> {
	render(): JSX.Element {
		const {
			hasError,
			errorMessage,
			handleRegister,
			isLoading,
		}: IRegisterFormProps = this.props;

		return (
			<KeyboardAvoidingView style={styles.wrapper} data-test="register">
				<ScrollView contentContainerStyle={styles.scrollStyle}>
					<View style={styles.container}>
						<TitleLogo />
					</View>
					<View style={styles.container}>
						<RegisterInput {...this.props} />
						{hasError && (
							<MessageWarning
								customStyle={styles.messageStyle}
								data-test="errorMessage">
								{errorMessage}
							</MessageWarning>
						)}
						<ButtonRounded
							style={styles.registerButtonStyle}
							onPress={handleRegister}
							isLoading={isLoading}>
							Register
						</ButtonRounded>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}
