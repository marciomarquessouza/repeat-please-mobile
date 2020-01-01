import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Slides from '../screens/slides';
import Walkthrough from '../screens/walkthrough';
import Login from '../screens/login';
import Register from '../screens/register';
import Home from '../screens/home';
import Loading from '../screens/loading';

const navigationOptions = () => ({ header: null });

const AppStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions,
	},
});

const AuthStack = createStackNavigator(
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
		},
		Register: {
			screen: Register,
		},
	},
);

const navigator = createSwitchNavigator(
	{
		Loading,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: "Loading"
	},
);

export default createAppContainer(navigator);
