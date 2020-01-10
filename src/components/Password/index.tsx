import React from 'react';
import { PlaceholderInput } from 'repeat-please-styles';

export interface IPasswordProps {
	password: string;
	onPasswordChange: (password: string) => void;
	onSubmited?: () => void;
}

export const Password = ({
	password,
	onPasswordChange,
	onSubmited,
}: IPasswordProps): JSX.Element => (
	<PlaceholderInput
		data-test="password"
		autoCapitalize="none"
		autoCorrect={false}
		placeholder="Password"
		secureTextEntry
		value={password}
		onChangeText={text => onPasswordChange(text)}
	/>
);
