import React, { Component } from 'react';
import { navigationOptionsDefault } from '../../navigator/helper';
import { LoginForm } from './LoginForm';
import {
	emailLogin,
	facebookLogin,
	googleLogin,
} from '../../data/services/login';
import { ILoginState, ILoginProps } from './types';

export class Login extends Component<{}, ILoginState> {
	constructor(props: ILoginProps) {
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
				data-test="login"
			/>
		);
	}
}

export default Login;
