import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { ButtonRounded, Divider, Logo } from 'repeat-please-styles';
import { FacebookButton, GoogleButton } from '../../components';
import { SIGN_IN, SIGN_UP } from '../../navigator/routes';
import { styles } from './style';
import { useTranslation } from 'react-i18next';
import { RootStackParamList } from '../../navigator/interface';
import { StackScreenProps } from '@react-navigation/stack';

type IWalkthroughProps = StackScreenProps<RootStackParamList, 'Home'>;

export const Walkthrough = ({ navigation }: IWalkthroughProps) => {
	const { t } = useTranslation();
	return (
		<ScrollView style={styles.wrapper}>
			<SafeAreaView data-test="walkthrough">
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Logo />
					</View>
					<ButtonRounded
						data-test="register"
						style={styles.buttonStyle}
						onPress={() => navigation.navigate(SIGN_UP)}>
						{t('register')}
					</ButtonRounded>
					<ButtonRounded
						data-test="login"
						style={styles.buttonStyle}
						onPress={() => navigation.navigate(SIGN_IN)}>
						{t('login')}
					</ButtonRounded>
					<Divider text={t('or')} containerStyle={styles.dividerStyle} />
					<FacebookButton style={styles.buttonStyle}>
						{t('loginFacebook')}
					</FacebookButton>
					<GoogleButton style={styles.buttonStyle}>
						{t('loginGoogle')}
					</GoogleButton>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};
