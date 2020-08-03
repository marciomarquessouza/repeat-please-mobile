import React from 'react';
import { PlaceholderInput } from 'repeat-please-styles';
import { useTranslation } from 'react-i18next';

export interface IEmailProps {
	onEmailChange: (email: string) => void;
	onSubmited?: () => void;
}

export const Email = ({ onEmailChange, onSubmited }: IEmailProps) => {
	const { t } = useTranslation();

	return (
		<PlaceholderInput
			data-test="email"
			placeholder={t('email')}
			keyboardType="email-address"
			onChangeText={text => onEmailChange(text)}
			onSubmitEditing={onSubmited}
			autoCapitalize="none"
			autoCorrect={false}
		/>
	);
};
