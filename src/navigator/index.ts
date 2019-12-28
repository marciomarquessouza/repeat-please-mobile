import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Slides from '../screens/slides';
import Walkthrough from '../screens/walkthrough';
import Login from '../screens/login';
import Register from '../screens/register';

const navigationOptions = () => ({ header: null });

const navigator = createStackNavigator(
	{
		Slides: {
			screen: Slides,
			navigationOptions,
		},
		Walkthrough: {
			screen: Walkthrough,
			navigationOptions,
		},
		Login: {
			screen: Login,
			navigationOptions,
		},
		Register: {
			screen: Register,
			navigationOptions,
		},
	},
	{
		initialRouteName: 'Slides',
	},
);

export default createAppContainer(navigator);
