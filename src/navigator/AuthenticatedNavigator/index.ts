import { createSwitchNavigator } from 'react-navigation';
import { TabNavigator } from './TabNavigator';

export const AuthenticatedNavigator = createSwitchNavigator(
	{
		TabNavigator,
	},
	{
		initialRouteName: 'TabNavigator',
	},
);
