import React, { Component } from 'react';
import { navigationOptionsDefault } from '../../navigator/helper';
import { LoginForm } from './LoginForm';
import {
	emailLogin,
	facebookLogin,
	googleLogin,
} from '../../data/services/login';
import { ILoginState } from './types';
import { FORGOT_PASSWORD } from '../../navigator/routes';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

export class Login extends Component<NavigationInjectedProps, ILoginState> {
	constructor(props: NavigationInjectedProps) {
		super(props);
		this.state = {
			hasError: false,
			email: '',
			password: '',
			errorMessage: '',
			isLoading: false,
		};
	}

	static navigationOptions = navigationOptionsDefault;

	showErrorMessage = (errorMessage: string, isLoading = false): void => {
		this.setState({
			hasError: true,
			errorMessage,
			isLoading,
		});
	};

	onEmailChange = (email: string): void => {
		this.setState({ email });
	};

	onPasswordChange = (password: string): void => {
		this.setState({ password });
	};

	forgotPassword = (): void => {
		const { navigation } = this.props;
		const { email } = this.state;
		navigation.navigate(FORGOT_PASSWORD, { loginEmail: email });
	};

	handleLogin = async (): Promise<void> => {
		const { email, password } = this.state;
		this.setState({ isLoading: true, hasError: false });
		try {
			await emailLogin(email, password);
		} catch (error) {
			this.showErrorMessage(error);
		}
	};

	handleFacebookLogin = () => {
		this.setState({ isLoading: true, hasError: false });
		try {
			facebookLogin();
		} catch (error) {
			this.showErrorMessage(error);
		}
	};

	handleGoogleLogin = async () => {
		this.setState({ isLoading: true, hasError: false });
		try {
			await googleLogin();
		} catch (error) {
			this.showErrorMessage(error);
		}
	};

	render() {
		return (
			<LoginForm
				{...this.state}
				onEmailChange={this.onEmailChange}
				onPasswordChange={this.onPasswordChange}
				handleLogin={this.handleLogin}
				handleFacebookLogin={this.handleFacebookLogin}
				handleGoogleLogin={this.handleGoogleLogin}
				forgotPassword={this.forgotPassword}
				data-test="login"
			/>
		);
	}
}

export default withNavigation(Login);
