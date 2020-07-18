import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { IPAType } from '../../../../types/ipa';
import { Home, Levels, Challenge, Result } from '../../../screens';
import { HeaderBackArrow } from '../../HeaderBackArrow';
import { styles } from '../../styles';

const navigationOptions = () => ({
	header: null,
});

export const HomeStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions,
	},
	Levels: {
		screen: Levels,
		navigationOptions: (props: any) => {
			const { examples }: IPAType = props.navigation.getParam('IPA');
			return {
				headerStyle: styles.headerStyle,
				headerLeft: () => (
					<HeaderBackArrow onPress={() => props.navigation.pop()} />
				),
				headerTitle: () => (
					<View style={styles.headerTitleContainer}>
						<Text style={styles.headerTitleStyle}>{examples.join(', ')}</Text>
					</View>
				),
				headerRight: () => <View style={styles.headerRightStyle} />,
			};
		},
	},
	Challenge: {
		screen: Challenge,
		navigationOptions: (props: any) => {
			return {
				headerStyle: styles.headerStyle,
				headerLeft: () => (
					<HeaderBackArrow onPress={() => props.navigation.pop()} />
				),
				headerTitle: () => (
					<View style={styles.headerTitleContainer}>
						<Text style={styles.headerTitleStyle}>30 Points(+10)</Text>
					</View>
				),
				headerRight: () => <View style={styles.headerRightStyle} />,
			};
		},
	},
	Result: {
		screen: Result,
	},
});
