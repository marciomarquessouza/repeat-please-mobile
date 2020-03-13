import React from 'react';
import { View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { ButtonRounded, Logo, TitleLogo, Divider } from 'repeat-please-styles';
import { LOGIN, REGISTER } from '../../navigator/routes';
import { styles } from './style';

export interface IWalkthroughProps {
	navigation: NavigationStackProp;
}

export const Walkthrough = ({ navigation }: IWalkthroughProps): JSX.Element => {
	return (
		<View style={styles.Container} data-test="walkthrough">
			<Logo customStyle={{ width: 150, height: 150 }} />
			<TitleLogo />
			<ButtonRounded
				data-test="register"
				customStyle={styles.ButtonStyle}
				onPress={() => navigation.navigate(REGISTER)}>
				Register
			</ButtonRounded>
			<ButtonRounded
				data-test="login"
				customStyle={styles.ButtonStyle}
				onPress={() => navigation.navigate(LOGIN)}>
				Login
			</ButtonRounded>
			<Divider text="OR" containerStyle={styles.DividerStyle} />
		</View>
	);
};
