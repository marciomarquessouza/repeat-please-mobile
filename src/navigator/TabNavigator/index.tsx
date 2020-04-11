import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Search } from '../../screens/Search';
import { Goals } from '../../screens/Goals';
import { Options } from '../../screens/Options';
import { Home } from '../../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';

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
			screen: Home,
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
