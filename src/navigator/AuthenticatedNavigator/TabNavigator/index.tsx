import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Search } from '../../../screens/Search';
import { Goals } from '../../../screens/Goals';
import { Options } from '../../../screens/Options';
import { HomeStack } from '../StackNavigator';

interface ITabIcon {
	name: string;
	color: string | undefined;
}

const tabIcon = ({ name, color }: ITabIcon) => (
	<Icon {...{ name, color, size: 25 }} />
);

export const TabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeStack,
			navigationOptions: {
				tabBarLabel: 'Challenges',
				tabBarIcon: ({ tintColor: color }) =>
					tabIcon({ name: 'ios-mic', color }),
			},
		},
		Search: {
			screen: Search,
			navigationOptions: {
				tabBarLabel: 'Search',
				tabBarIcon: ({ tintColor: color }) =>
					tabIcon({ name: 'ios-search', color }),
			},
		},
		Goals: {
			screen: Goals,
			navigationOptions: {
				tabBarLabel: 'Goals',
				tabBarIcon: ({ tintColor: color }) =>
					tabIcon({ name: 'ios-star', color }),
			},
		},
		Options: {
			screen: Options,
			navigationOptions: {
				tabBarLabel: 'Options',
				tabBarIcon: ({ tintColor: color }) =>
					tabIcon({ name: 'ios-menu', color }),
			},
		},
	},
	{
		initialRouteName: 'Home',
		tabBarOptions: {
			activeTintColor: '#000',
			inactiveTintColor: 'gray',
		},
	},
);
