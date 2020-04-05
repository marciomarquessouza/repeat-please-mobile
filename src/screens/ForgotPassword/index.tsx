import React, { Component } from 'react';
import { styles } from './style';
import { View } from 'react-native';
import {
	ButtonRounded,
	Logo,
	TitleLogo,
	Title,
	MessageSuccess,
	MessageWarning,
} from 'repeat-please-styles';
import { Email } from '../../components/Email';
import { NavigationInjectedProps } from 'react-navigation';
import { passwordReset } from '../../data/services/login';
import { IForgotPasswordState } from './types';

class ForgotPassword extends Component<
	NavigationInjectedProps,
	IForgotPasswordState
> {
	constructor(props: NavigationInjectedProps) {
		super(props);
		const loginEmail = this.props.navigation.getParam('email');
		this.state = {
			email: loginEmail || '',
			isLoading: false,
			hasError: false,
			errorMessage: '',
			isSuccess: false,
			successMessage: '',
		};
	}

	onEmailChange = (email: string): void => {
		this.setState({ email });
	};

	handlePasswordForgot = async (): Promise<void> => {
		const { email } = this.state;

		this.setState({
			hasError: false,
			errorMessage: '',
			isLoading: true,
		});

		if (!email) {
			return this.setState({
				hasError: true,
				errorMessage: 'Field email is mandatory',
				isLoading: false,
			});
		}

		try {
			await passwordReset(email);
			this.setState({
				isSuccess: true,
				successMessage: 'New password was sent',
				isLoading: false,
			});
		} catch ({ message }) {
			this.setState({
				hasError: true,
				errorMessage: message,
				isLoading: false,
			});
		}
	};

	render(): JSX.Element {
		const {
			email,
			hasError,
			errorMessage,
			isSuccess,
			successMessage,
			isLoading,
		} = this.state;
		return (
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<Logo customStyle={styles.logoStyle} />
					<TitleLogo />
				</View>
				<View style={styles.container}>
					<Title customStyle={styles.titleStyle}>Forgot Your Password?</Title>
					<Email email={email} onEmailChange={this.onEmailChange} />
					{hasError && <MessageWarning>{errorMessage}</MessageWarning>}
					{isSuccess && <MessageSuccess>{successMessage}</MessageSuccess>}
				</View>
				<View style={styles.container}>
					<ButtonRounded
						isLoading={isLoading}
						onPress={this.handlePasswordForgot}>
						Send new Password
					</ButtonRounded>
				</View>
			</View>
		);
	}
}

export default ForgotPassword;
