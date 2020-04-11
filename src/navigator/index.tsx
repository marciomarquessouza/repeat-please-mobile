import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Loading } from '../screens/Loading';
import { TabNavigator } from './TabNavigator';
import { AuthStack } from './AuthStack';

const navigator = createSwitchNavigator(
	{
		Loading,
		App: TabNavigator,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'Loading',
	},
);

export default createAppContainer(navigator);
