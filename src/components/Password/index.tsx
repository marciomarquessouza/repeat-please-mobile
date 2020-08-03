import React from 'react';
import { PlaceholderInput } from 'repeat-please-styles';
import { useTranslation } from 'react-i18next';

export interface IPasswordProps {
	repeat?: boolean;
	onPasswordChange: (password: string) => void;
	onSubmited?: () => void;
}

export const Password = ({
	onPasswordChange,
	onSubmited,
	repeat,
}: IPasswordProps) => {
	const { t } = useTranslation();

	return (
		<PlaceholderInput
			data-test="password"
			autoCapitalize="none"
			autoCorrect={false}
			placeholder={repeat ? t('confirmPassword') : t('password')}
			secureTextEntry
			onChangeText={text => onPasswordChange(text)}
			onSubmitEditing={onSubmited}
		/>
	);
};
