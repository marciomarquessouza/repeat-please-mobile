import React, { useState, useContext, useMemo, useEffect } from 'react';
import { styles } from './style';
import {
	ActivityIndicator,
	SafeAreaView,
	TouchableOpacity,
	Image,
	View,
	ScrollView,
} from 'react-native';
import { PlaceholderInput, Title, TitleLogo } from 'repeat-please-styles';
import { submit } from '../../../assets/images';
import { emailIsValid } from '../../utils/validations';
import { AlertsContext } from '../../contexts/AlertsContext';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/actionsCreator/signInActionsCreators';
import { AppState } from '../../reducers/rootReducer';
import { useTranslation } from 'react-i18next';

export const ForgotPassword = () => {
	// const loginEmail = navigation.getParam('email');
	// TODO add state management here
	const loginEmail = 'change@gmail.com';
	const [email, setEmail] = useState(loginEmail || '');
	const { isLoading, error } = useSelector((state: AppState) => state.signIn);
	const dispatch = useDispatch();
	const { showAlert } = useContext(AlertsContext);
	const { t } = useTranslation();

	useEffect(() => {
		return () => {
			dispatch(actions.signInFinish());
		};
	});

	useMemo(() => {
		if (error) {
			showAlert({ type: 'error', message: error });
		}
	}, [error, showAlert]);

	const onForgotSubmit = () => {
		return emailIsValid(email)
			? dispatch(actions.forgotPasswordnRequest(email))
			: showAlert({ type: 'error', message: t('errorEmail') });
	};

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
			<SafeAreaView style={styles.wrapper}>
				<View style={styles.container}>
					<TitleLogo />
				</View>
				<View style={styles.container}>
					<Title customStyle={styles.titleStyle}>{t('forgotPassword')}</Title>
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.inputStyle}>
						<PlaceholderInput
							{...{
								placeholder: t('email'),
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
			</SafeAreaView>
		</ScrollView>
	);
};
