import React from 'react';
import { PlaceholderInput } from 'repeat-please-styles';

export interface IPasswordProps {
	password: string;
	repeat?: boolean;
	onPasswordChange: (password: string) => void;
	onSubmited?: () => void;
}

export const Password = ({
	password,
	onPasswordChange,
	onSubmited,
	repeat,
}: IPasswordProps): JSX.Element => (
	<PlaceholderInput
		data-test="password"
		autoCapitalize="none"
		autoCorrect={false}
		placeholder={repeat ? 'Confirm Password' : 'Password'}
		secureTextEntry
		value={password}
		onChangeText={text => onPasswordChange(text)}
		onSubmitEditing={onSubmited}
	/>
);
