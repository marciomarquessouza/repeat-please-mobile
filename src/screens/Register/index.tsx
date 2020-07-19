import React, { useState, useContext } from 'react';
import { RegisterForm } from './RegisterForm';
import { createUserWithEmailPassword } from '../../services/userService';
import { AlertsContext } from '../../contexts/AlertsContext';

export const Register = (): JSX.Element => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { showAlert } = useContext(AlertsContext);

	const handleRegister = async (): Promise<void> => {
		const fields = [name, email, password].filter(field => field === '');
		try {
			setIsLoading(true);
			if (fields.length) {
				throw new Error('All fields are required');
			}
			await createUserWithEmailPassword(email, password, name);
		} catch (error) {
			setIsLoading(false);
			showAlert({ type: 'error', message: error.message });
		}
	};

	return (
		<RegisterForm
			data-test="register"
			onNameChange={setName}
			onPasswordChange={setPassword}
			onEmailChange={setEmail}
			handleRegister={handleRegister}
			isLoading={isLoading}
		/>
	);
};
