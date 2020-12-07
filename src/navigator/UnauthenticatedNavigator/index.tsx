import React from 'react';
import {
	createStackNavigator,
	StackScreenProps,
} from '@react-navigation/stack';
import { Slides } from '../../screens/Slides';
import { Walkthrough } from '../../screens/Walkthrough';
import { SignIn } from '../../screens/SignIn';
import { SignUp } from '../../screens/SignUp';
import { ForgotPassword } from '../../screens/ForgotPassword';
import { HeaderBackArrow } from '../HeaderBackArrow';
import { styles } from '../styles';
import { RootStackParamList } from '../interface';
import * as ROUTES from '../routes';

export type INavigationProps = StackScreenProps<RootStackParamList>;

const headerOptions = ({ navigation }: INavigationProps) => ({
	headerStyle: styles.headerStyle,
	headerLeft: () => <HeaderBackArrow onPress={navigation.goBack} />,
});

const Stack = createStackNavigator();

export const UnauthenticatedNavigator = () => (
	<Stack.Navigator initialRouteName={ROUTES.SLIDES} headerMode="screen">
		<Stack.Screen
			name={ROUTES.SLIDES}
			component={Slides}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen
			name={ROUTES.WALKTHROUGH}
			component={Walkthrough}
			options={headerOptions}
		/>
		<Stack.Screen
			name={ROUTES.SIGN_IN}
			component={SignIn}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen
			name={ROUTES.SIGN_UP}
			component={SignUp}
			options={headerOptions}
		/>
		<Stack.Screen
			name={ROUTES.FORGOT_PASSWORD}
			component={ForgotPassword}
			options={headerOptions}
		/>
	</Stack.Navigator>
);
