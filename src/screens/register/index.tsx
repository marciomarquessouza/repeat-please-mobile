import React, { Component } from 'react';
import { navigationOptionsDefault } from '../../navigator/helper';
import { RegisterForm } from './RegisterForm';
import * as firebase from 'firebase';

export interface IRegisterState {
	hasError: boolean;
	errorMessage: string;
	email: string;
	password: string;
	name: string;
}

export interface IRegisterProps {}

export class Register extends Component<{}, IRegisterState> {
	constructor(props: IRegisterProps) {
		super(props);
		this.state = {
			hasError: false,
			errorMessage: '',
			email: '',
			password: '',
			name: '',
		};
	}

	static navigationOptions = navigationOptionsDefault;

	onNameChange = (name: string): void => {
		this.setState({ name });
	};

	onEmailChange = (email: string): void => {
		this.setState({ email });
	};

	onPasswordChange = (password: string): void => {
		this.setState({ password });
	};

	handleRegister = async (): Promise<void> => {
		const { email, name, password } = this.state;

		try {
			const userCredentials = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);

			if (!userCredentials || !userCredentials.user) {
				throw Error('User unknown');
			}

			return userCredentials.user.updateProfile({
				displayName: name,
			});
		} catch (error) {
			this.setState({ hasError: true, errorMessage: error.message });
		}
	};

	render() {
		return (
			<RegisterForm
				{...this.state}
				data-test="register"
				onNameChange={this.onNameChange}
				onPasswordChange={this.onPasswordChange}
				onEmailChange={this.onEmailChange}
				handleRegister={this.handleRegister}
			/>
		);
	}
}

export default Register;
