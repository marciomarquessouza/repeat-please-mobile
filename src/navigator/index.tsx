import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Loading } from '../screens/Loading';
import { AuthenticatedNavigator } from './AuthenticatedNavigator';
import { UnauthenticatedNavigator } from './UnauthenticatedNavigator';

const navigator = createSwitchNavigator(
	{
		Loading,
		AuthenticatedNavigator,
		UnauthenticatedNavigator,
	},
	{
		initialRouteName: 'Loading',
	},
);

export default createAppContainer(navigator);
