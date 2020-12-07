import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Search } from '../../../screens/Search';
import { Goals } from '../../../screens/Goals';
import { Options } from '../../../screens/Options';
import { HomeStack } from '../StackNavigator';
import * as ROUTES from '../../routes';

interface ITabIcon {
	name: string;
	color: string | undefined;
}

const tabIcon = ({ name, color }: ITabIcon) => (
	<Icon {...{ name, color, size: 25 }} />
);

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
	<Tab.Navigator
		initialRouteName={ROUTES.HOME}
		tabBarOptions={{
			activeTintColor: '#000',
			inactiveTintColor: 'gray',
			style: {
				height: 80,
			},
		}}>
		<Tab.Screen
			name={ROUTES.HOME}
			component={HomeStack}
			options={{
				tabBarLabel: 'Challenges',
				tabBarIcon: ({ color }) => tabIcon({ name: 'ios-mic', color }),
			}}
		/>
		<Tab.Screen
			name={ROUTES.SEARCH}
			component={Search}
			options={{
				tabBarLabel: 'Search',
				tabBarIcon: ({ color }) => tabIcon({ name: 'ios-search', color }),
			}}
		/>
		<Tab.Screen
			name={ROUTES.GOALS}
			component={Goals}
			options={{
				tabBarLabel: 'Goals',
				tabBarIcon: ({ color }) => tabIcon({ name: 'ios-star', color }),
			}}
		/>
		<Tab.Screen
			name={ROUTES.OPTIONS}
			component={Options}
			options={{
				tabBarLabel: 'Options',
				tabBarIcon: ({ color }) => tabIcon({ name: 'ios-menu', color }),
			}}
		/>
	</Tab.Navigator>
);
