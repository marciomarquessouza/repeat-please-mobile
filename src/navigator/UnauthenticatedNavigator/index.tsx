import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Slides } from '../../screens/Slides';
import { Walkthrough } from '../../screens/Walkthrough';
import { Login } from '../../screens/Login';
import { Register } from '../../screens/Register';
import { ForgotPassword } from '../../screens/ForgotPassword';
import { HeaderBackArrow } from '../HeaderBackArrow';
import { styles } from '../styles';

const navigationOptions = () => ({
	header: null,
});

const backArrow = () => (props: any) => ({
	headerStyle: styles.headerStyle,
	headerLeft: () => <HeaderBackArrow onPress={() => props.navigation.pop()} />,
});

export const UnauthenticatedNavigator = createStackNavigator(
	{
		Slides: {
			screen: Slides,
			navigationOptions,
		},
		Walkthrough: {
			screen: Walkthrough,
			navigationOptions: backArrow(),
		},
		Login: {
			screen: Login,
			navigationOptions: () => ({
				headerShown: false,
			}),
		},
		Register: {
			screen: Register,
			navigationOptions: backArrow(),
		},
		ForgotPassword: {
			screen: ForgotPassword,
			navigationOptions: backArrow(),
		},
	},
	{
		headerMode: 'screen',
	},
);
