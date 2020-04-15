import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Home } from '../../../screens/Home';
import { Levels } from '../../../screens/Levels';
import { HeaderBackArrow } from '../../HeaderBackArrow';
import { styles } from '../../styles';

const navigationOptions = () => ({
	header: null,
});

const backArrow = () => (props: any) => ({
	headerStyle: styles.headerStyle,
	headerLeft: () => <HeaderBackArrow onPress={() => props.navigation.pop()} />,
});

export const HomeStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions,
	},
	Levels: {
		screen: Levels,
		navigationOptions: backArrow(),
	},
});
