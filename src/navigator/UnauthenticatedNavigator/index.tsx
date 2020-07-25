import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Slides } from '../../screens/Slides';
import { Walkthrough } from '../../screens/Walkthrough';
import { SignIn } from '../../screens/SignIn';
import { SignUp } from '../../screens/SignUp';
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
		SignIn: {
			screen: SignIn,
			navigationOptions: () => ({
				headerShown: false,
			}),
		},
		SignUp: {
			screen: SignUp,
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
