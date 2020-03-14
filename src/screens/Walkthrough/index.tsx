import React from 'react';
import { View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import {
	ButtonRounded,
	Divider,
	FacebookButton,
	GoogleButton,
	Logo,
	TitleLogo,
} from 'repeat-please-styles';
import { facebookLogin, googleLogin } from '../../data/services/login';
import { LOGIN, REGISTER } from '../../navigator/routes';
import { styles } from './style';

export interface IWalkthroughProps {
	navigation: NavigationStackProp;
}

export const Walkthrough = ({ navigation }: IWalkthroughProps): JSX.Element => (
	<View style={styles.container} data-test="walkthrough">
		<Logo customStyle={{ width: 150, height: 150 }} />
		<TitleLogo />
		<ButtonRounded
			data-test="register"
			style={styles.buttonStyle}
			onPress={() => navigation.navigate(REGISTER)}>
			Register
		</ButtonRounded>
		<ButtonRounded
			data-test="login"
			style={styles.buttonStyle}
			onPress={() => navigation.navigate(LOGIN)}>
			Login
		</ButtonRounded>
		<Divider text="OR" containerStyle={styles.dividerStyle} />
		<FacebookButton onPress={facebookLogin} style={styles.buttonStyle}>
			Login with Facebook
		</FacebookButton>
		<GoogleButton onPress={googleLogin} style={styles.buttonStyle}>
			Login with Google
		</GoogleButton>
	</View>
);
