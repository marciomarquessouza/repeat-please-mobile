import React from 'react';
import { PlaceholderInput } from 'repeat-please-styles';

export interface IEmailProps {
	email: string;
	onEmailChange: (email: string) => void;
	onSubmited?: () => void;
}

export const Email = ({
	email,
	onEmailChange,
	onSubmited,
}: IEmailProps): JSX.Element => (
	<PlaceholderInput
		data-test="email"
		placeholder="Email"
		keyboardType="email-address"
		value={email}
		onChangeText={text => onEmailChange(text)}
		onSubmitEditing={onSubmited}
	/>
);
