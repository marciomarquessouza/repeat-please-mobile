import React from 'react';
import { PlaceholderInput } from 'repeat-please-styles';
import { useTranslation } from 'react-i18next';

export interface INameProps {
	onNameChange: (name: string) => void;
	onSubmited?: () => void;
}

export const Name = ({ onNameChange, onSubmited }: INameProps) => {
	const { t } = useTranslation();
	return (
		<PlaceholderInput
			data-test="name"
			placeholder={t('name')}
			onChangeText={text => onNameChange(text)}
			onSubmitEditing={onSubmited}
			autoCapitalize="words"
			autoCorrect={false}
		/>
	);
};
