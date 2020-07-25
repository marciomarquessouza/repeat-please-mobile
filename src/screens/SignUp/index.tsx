import React, { useState, useContext } from 'react';
import { RegisterForm } from './RegisterForm';
import { AlertsContext } from '../../contexts/AlertsContext';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import * as actions from '../../actions/actionsCreator/signUpActionsCreator';

export const SignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { showAlert } = useContext(AlertsContext);
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state: AppState) => state.signUp);

	const handleRegister = async (): Promise<void> => {
		const fields = [name, email, password].filter(field => field === '');
		try {
			if (fields.length) throw new Error('All fields are required');
			dispatch(actions.signUpRequest({ name, email, password }));
		} catch (error) {
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
