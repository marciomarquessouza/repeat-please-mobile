import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Loading } from '../screens/Loading';
import { TabNavigator } from './AuthenticatedNavigator/TabNavigator';
import { UnauthenticatedNavigator } from './UnauthenticatedNavigator';
import { NavigationContainer } from '@react-navigation/native';
import * as ROUTES from './routes';

const Stack = createStackNavigator();

export const AppNavigationContainer = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName={ROUTES.LOADING}
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name={ROUTES.LOADING} component={Loading} />
			<Stack.Screen name={ROUTES.TAB_NAVIGATOR} component={TabNavigator} />
			<Stack.Screen
				name={ROUTES.UNAUTHENTICATED}
				component={UnauthenticatedNavigator}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);
