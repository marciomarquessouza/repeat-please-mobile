import React from 'react';
import { PlaceholderInput } from 'repeat-please-styles';

export interface INameProps {
	onNameChange: (name: string) => void;
	onSubmited?: () => void;
}

export const Name = ({ onNameChange, onSubmited }: INameProps): JSX.Element => (
	<PlaceholderInput
		data-test="name"
		placeholder="Name or NickName"
		onChangeText={text => onNameChange(text)}
		onSubmitEditing={onSubmited}
		autoCapitalize="words"
		autoCorrect={false}
	/>
);
