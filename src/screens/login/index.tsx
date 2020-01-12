import React, { Component } from 'react';
import { navigationOptionsDefault } from '../../navigator/helper';
import * as firebase from 'firebase';
import { AccessToken, LoginManager, LoginResult } from 'react-native-fbsdk';
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
		this.setState({ isLoading: true, hasError: false });
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
		} catch (error) {
			this.setState({
				hasError: true,
				errorMessage: error.message,
				isLoading: false,
			});
		}
	};

	handleFacebookLogin = () => {
		this.setState({ isLoading: true, hasError: false });
		LoginManager.logInWithPermissions(['public_profile', 'email'])
			.then((result: LoginResult) => {
				if (result.isCancelled) {
					throw new Error('The user cancelled the request');
				}
				return AccessToken.getCurrentAccessToken();
			})
			.then(data => {
				if (!data || !data.accessToken) {
					throw new Error('Facebook server error');
				}
				const credential = firebase.auth.FacebookAuthProvider.credential(
					data.accessToken,
				);
				return firebase.auth().signInWithCredential(credential);
			})
			.catch(error => {
				this.setState({
					hasError: true,
					errorMessage: error.message,
					isLoading: false,
				});
			});
	};

	render() {
		return (
			<LoginForm
				{...this.state}
				onEmailChange={this.onEmailChange}
				onPasswordChange={this.onPasswordChange}
				handleLogin={this.handleLogin}
				handleFacebookLogin={this.handleFacebookLogin}
				data-test="login"
			/>
		);
	}
}

export default Login;
