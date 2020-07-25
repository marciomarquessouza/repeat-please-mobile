import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { ButtonRounded, Divider, Logo, TitleLogo } from 'repeat-please-styles';
import { FacebookButton, GoogleButton } from '../../components';
import { SIGN_IN, SIGN_UP } from '../../navigator/routes';
import { styles } from './style';

export interface IWalkthroughProps {
	navigation: NavigationStackProp;
}

export const Walkthrough = ({ navigation }: IWalkthroughProps): JSX.Element => (
	<ScrollView style={styles.wrapper}>
		<SafeAreaView data-test="walkthrough">
			<View style={styles.container}>
				<Logo customStyle={{ width: 150, height: 150 }} />
				<TitleLogo />
				<ButtonRounded
					data-test="register"
					style={styles.buttonStyle}
					onPress={() => navigation.navigate(SIGN_UP)}>
					Register
				</ButtonRounded>
				<ButtonRounded
					data-test="login"
					style={styles.buttonStyle}
					onPress={() => navigation.navigate(SIGN_IN)}>
					Login
				</ButtonRounded>
				<Divider text="OR" containerStyle={styles.dividerStyle} />
				<FacebookButton style={styles.buttonStyle}>
					Login with Facebook
				</FacebookButton>
				<GoogleButton style={styles.buttonStyle}>
					Login with Google
				</GoogleButton>
			</View>
		</SafeAreaView>
	</ScrollView>
);
