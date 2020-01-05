import React, { Component } from 'react';
import { navigationOptionsDefault } from '../../navigator/helper';
import * as firebase from 'firebase';
import { LoginForm } from './LoginForm';

export interface ILoginState {
	hasError: boolean;
	errorMessage: string;
	email: string;
	password: string;
}

export class Login extends Component<{}, ILoginState> {
	constructor(props = {}) {
		super(props);
		this.state = {
			hasError: false,
			email: '',
			password: '',
			errorMessage: '',
		};
	}

	static navigationOptions = navigationOptionsDefault;

	onEmailChange = (email: string): void => {
		this.setState({ email });
	};

	onPasswordChange = (password: string): void => {
		this.setState({ password });
	};

	handleLogin = (): void => {
		const { email, password } = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(error =>
				this.setState({ hasError: true, errorMessage: error.message }),
			);
	};

	render() {
		return (
			<LoginForm
				{...this.state}
				onEmailChange={this.onEmailChange}
				onPasswordChange={this.onPasswordChange}
				handleLogin={this.handleLogin}
				data-test="login"
			/>
		);
	}
}

export default Login;
