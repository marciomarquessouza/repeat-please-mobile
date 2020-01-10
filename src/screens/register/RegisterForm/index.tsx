import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View } from 'react-native';
import {
	ButtonRounded,
	ButtonTransparent,
	MessageWarning,
	TitleLogo,
	PlaceholderInput,
} from 'repeat-please-styles';
import { Email, Name, Password } from '../../../components';
import { styles } from './styles';

export interface IRegisterFormProps {
	hasError: boolean;
	errorMessage: string;
	email: string;
	onEmailChange: (email: string) => void;
	name: string;
	onNameChange: (name: string) => void;
	password: string;
	onPasswordChange: (password: string) => void;
	handleRegister: () => void;
	isLoading: boolean;
}

export class RegisterForm extends Component<IRegisterFormProps, {}> {
	render(): JSX.Element {
		const {
			hasError,
			email,
			errorMessage,
			onEmailChange,
			name,
			onNameChange,
			password,
			onPasswordChange,
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
						<Name name={name} onNameChange={onNameChange} onSubmited={handleRegister} />
						<Email email={email} onEmailChange={onEmailChange} onSubmited={handleRegister} />
						<Password password={password} onPasswordChange={onPasswordChange} onSubmited={handleRegister} />
						<PlaceholderInput placeholder="Confirm Password" secureTextEntry />
						{hasError && (
							<MessageWarning
								customStyle={styles.messageStyle}
								data-test="errorMessage">
								{errorMessage}
							</MessageWarning>
						)}
						<ButtonRounded
							customStyle={styles.registerButtonStyle}
							onPress={handleRegister}
							isLoading={isLoading}>
							Register
						</ButtonRounded>
					</View>
					<View style={styles.container}>
						<ButtonTransparent customStyle={styles.buttonStyle}>
							Loging with Facebook
						</ButtonTransparent>
						<ButtonTransparent customStyle={styles.buttonStyle}>
							Loging with Google
						</ButtonTransparent>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}
