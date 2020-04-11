import React from 'react';
import { PlaceholderInput } from 'repeat-please-styles';

export interface IPasswordProps {
	repeat?: boolean;
	onPasswordChange: (password: string) => void;
	onSubmited?: () => void;
}

export const Password = ({
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
		onChangeText={text => onPasswordChange(text)}
		onSubmitEditing={onSubmited}
	/>
);
