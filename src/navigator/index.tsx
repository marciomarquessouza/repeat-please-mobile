import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Slides } from '../screens/Slides';
import { Walkthrough } from '../screens/Walkthrough';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import Home from '../screens/Home';
import Loading from '../screens/Loading';
import { ForgotPassword } from '../screens/ForgotPassword';
import { HeaderBackArrow } from './HeaderBackArrow';
import { color } from 'repeat-please-styles';

const navigationOptions = () => ({
	header: null,
});

const backArrow = () => (props: any) => ({
	headerStyle: {
		backgroundColor: color.background,
		elevation: 0,
		shadowOpacity: 0,
		borderBottomWidth: 0,
	},
	headerLeft: () => <HeaderBackArrow onPress={() => props.navigation.pop()} />,
});

const AppStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions,
	},
});

const AuthStack = createStackNavigator(
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

const navigator = createSwitchNavigator(
	{
		Loading,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'Loading',
	},
);

export default createAppContainer(navigator);
