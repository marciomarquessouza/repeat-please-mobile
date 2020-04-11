import React from 'react';
import { PlaceholderInput } from 'repeat-please-styles';

export interface IEmailProps {
	onEmailChange: (email: string) => void;
	onSubmited?: () => void;
}

export const Email = ({
	onEmailChange,
	onSubmited,
}: IEmailProps): JSX.Element => (
	<PlaceholderInput
		data-test="email"
		placeholder="Email"
		keyboardType="email-address"
		onChangeText={text => onEmailChange(text)}
		onSubmitEditing={onSubmited}
		autoCapitalize="none"
		autoCorrect={false}
	/>
);
