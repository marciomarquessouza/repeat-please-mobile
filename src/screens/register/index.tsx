import React, { Component } from 'react';
import { navigationOptionsDefault } from '../../navigator/helper';
import { RegisterForm } from './RegisterForm';
import { createUserWithEmailPassword } from '../../data/services/user';

export interface IRegisterState {
	email: string;
	errorMessage: string;
	hasError: boolean;
	isLoading: boolean;
	name: string;
	passRepeat: string;
	password: string;
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
			passRepeat: '',
			name: '',
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

	onNameChange = (name: string): void => {
		this.setState({ name });
	};

	onEmailChange = (email: string): void => {
		this.setState({ email });
	};

	onPasswordChange = (password: string): void => {
		this.setState({ password });
	};

	onPassRepeatChange = (passRepeat: string): void => {
		this.setState({ passRepeat });
	};

	checkFormFields = (): boolean => {
		const { name, email, password, passRepeat } = this.state;
		const fields = [name, email, password, passRepeat].filter(field => !field);

		if (fields.length) {
			this.showErrorMessage('All fields are mandatory');
			return false;
		}

		if (password !== passRepeat) {
			this.showErrorMessage("Password don't match");
			return false;
		}
		return true;
	};

	handleRegister = async (): Promise<void> => {
		if (!this.checkFormFields()) return;

		this.setState({ isLoading: true, hasError: false });

		const { email, name, password } = this.state;

		try {
			const user = await createUserWithEmailPassword(email, password);
			user.updateProfile({
				displayName: name,
			});
		} catch (error) {
			this.showErrorMessage(error);
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
				onPassRepeatChange={this.onPassRepeatChange}
			/>
		);
	}
}

export default Register;
