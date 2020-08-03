import React from 'react';
import { Image, ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { ButtonRounded, TitleLogo } from 'repeat-please-styles';
import { Email, Name, Password } from '../../../components';
import { person, email, lock } from '../../../../assets/images';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';

export interface IRegisterFormProps {
	handleRegister: () => void;
	isLoading: boolean;
	onEmailChange: (email: string) => void;
	onNameChange: (name: string) => void;
	onPasswordChange: (password: string) => void;
}

export const RegisterForm = ({
	handleRegister,
	isLoading,
	onEmailChange,
	onNameChange,
	onPasswordChange,
}: IRegisterFormProps) => {
	const { t } = useTranslation();
	return (
		<KeyboardAvoidingView style={styles.wrapper} data-test="register">
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.titleStyle}>
						<TitleLogo />
					</View>
					<View style={styles.container}>
						<View style={styles.formContainer}>
							<View style={styles.inputContainer}>
								<Image source={person} style={styles.iconStyle} />
								<Name {...{ onNameChange }} />
							</View>
							<View style={styles.inputContainer}>
								<Image source={email} style={styles.iconStyle} />
								<Email {...{ onEmailChange }} />
							</View>
							<View style={styles.inputContainer}>
								<Image source={lock} style={styles.iconStyle} />
								<Password
									{...{ onPasswordChange, onSubmited: handleRegister }}
								/>
							</View>
						</View>
						<View style={styles.registerButtonStyle}>
							<ButtonRounded onPress={handleRegister} isLoading={isLoading}>
								{t('register')}
							</ButtonRounded>
						</View>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
