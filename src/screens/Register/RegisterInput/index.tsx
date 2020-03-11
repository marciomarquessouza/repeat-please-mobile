import React from 'react';
import { Email, Name, Password } from '../../../components';

export interface IRegisterInputProps {
	email: string;
	onEmailChange: (email: string) => void;
	name: string;
	onNameChange: (name: string) => void;
	password: string;
	onPasswordChange: (password: string) => void;
	passRepeat: string;
	onPassRepeatChange: (password: string) => void;
	handleRegister: () => void;
}

export const RegisterInput = ({
	email,
	name,
	onEmailChange,
	onNameChange,
	onPassRepeatChange,
	onPasswordChange,
	passRepeat,
	password,
}: IRegisterInputProps): JSX.Element => (
	<>
		<Name name={name} onNameChange={onNameChange} />
		<Email email={email} onEmailChange={onEmailChange} />
		<Password password={password} onPasswordChange={onPasswordChange} />
		<Password
			password={passRepeat}
			onPasswordChange={onPassRepeatChange}
			repeat
		/>
	</>
);
