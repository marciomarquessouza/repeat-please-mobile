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

export interface ILoginProps {}

export class Login extends Component<{}, ILoginState> {
	constructor(props: ILoginProps) {
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

	handleLogin = async (): Promise<void> => {
		const { email, password } = this.state;
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
		} catch (error) {
			this.setState({ hasError: true, errorMessage: error.message });
		}
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
