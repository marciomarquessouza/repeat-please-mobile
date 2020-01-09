import React, { Component } from 'react';
import { navigationOptionsDefault } from '../../navigator/helper';
import * as firebase from 'firebase';
import { LoginForm } from './LoginForm';

export interface ILoginState {
	hasError: boolean;
	errorMessage: string;
	email: string;
	password: string;
	isLoading: boolean;
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
			isLoading: false,
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
		this.setState({ isLoading: true });
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			this.setState({ isLoading: false });
		} catch (error) {
			this.setState({
				hasError: true,
				errorMessage: error.message,
				isLoading: false,
			});
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
