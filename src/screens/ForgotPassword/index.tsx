import React, { useState, useContext } from 'react';
import { styles } from './style';
import {
	ActivityIndicator,
	SafeAreaView,
	TouchableOpacity,
	Image,
	View,
} from 'react-native';
import { Logo, PlaceholderInput, Title, TitleLogo } from 'repeat-please-styles';
import { NavigationStackProp } from 'react-navigation-stack';
import { passwordReset } from '../../data/services/login';
import { submit } from '../../../assets/images';
import { emailIsValid } from '../../utils/validations';
import { AlertsContext } from '../../contexts/AlertsContext';

interface IForgotPasswordProp {
	navigation: NavigationStackProp;
}

export const ForgotPassword = ({ navigation }: IForgotPasswordProp) => {
	const loginEmail = navigation.getParam('email');
	const [email, setEmail] = useState(loginEmail || '');
	const [isLoading, setIsLoading] = useState(false);
	const { showAlert } = useContext(AlertsContext);

	const onForgotSubmit = async (): Promise<void> => {
		if (!emailIsValid(email)) {
			showAlert({ type: 'error', message: 'Invalid Email' });
			return;
		}

		try {
			setIsLoading(true);
			await passwordReset(email);
			showAlert({ type: 'success', message: 'Success =]' });
		} catch ({ message }) {
			showAlert({ type: 'error', message });
			setIsLoading(false);
		}
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<View>
				<View style={styles.container}>
					<Logo customStyle={styles.logoStyle} />
					<TitleLogo />
				</View>
				<View style={styles.container}>
					<Title customStyle={styles.titleStyle}>Forgot Your Password?</Title>
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.inputStyle}>
						<PlaceholderInput
							{...{
								placeholder: 'Email Address',
								value: email,
								onChangeText: text => setEmail(text),
								keyboardType: 'email-address',
								autoCapitalize: 'none',
								autoCorrect: false,
								onSubmitEditing: onForgotSubmit,
								returnKeyType: 'send',
							}}
						/>
					</View>
					<TouchableOpacity
						{...{
							onPress: onForgotSubmit,
							style: styles.buttonStyle,
						}}>
						{isLoading ? (
							<ActivityIndicator size="small" />
						) : (
							<Image source={submit} />
						)}
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};
