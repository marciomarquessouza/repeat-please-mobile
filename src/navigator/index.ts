import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Slides from '../screens/Slides';
import Walkthrough from '../screens/Walkthrough';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Loading from '../screens/Loading';

const navigationOptions = () => ({ header: null });

const AppStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions,
	},
});

const AuthStack = createStackNavigator({
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
});

const navigator = createSwitchNavigator(
	{
		Loading,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'Loading',
	},
);

export default createAppContainer(navigator);
