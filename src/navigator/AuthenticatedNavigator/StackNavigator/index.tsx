import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { IIPA } from '../../../components/IPAList';
import { Home } from '../../../screens/Home';
import { Levels } from '../../../screens/Levels';
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
			const { examples }: IIPA = props.navigation.getParam('IPA');
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
});
