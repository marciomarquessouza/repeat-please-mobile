import React from 'react';
import { View } from 'react-native';
import { ButtonRounded, Logo, TitleLogo } from 'repeat-please-styles';
import { styles } from './style';

export const Walkthrough = () => (
	<View style={styles.Container} data-test="walkthrough">
		<Logo />
		<TitleLogo />
		<ButtonRounded customStyle={styles.ButtonStyle}>Register</ButtonRounded>
		<ButtonRounded customStyle={styles.ButtonStyle}>Login</ButtonRounded>
	</View>
);
