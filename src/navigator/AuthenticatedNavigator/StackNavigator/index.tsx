import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Levels, Challenge, Result } from '../../../screens';
import { HeaderBackArrow } from '../../HeaderBackArrow';
import { styles } from '../../styles';
import { RootStackParamList } from '../../interface';
import { StackScreenProps } from '@react-navigation/stack';
import * as ROUTES from '../../routes';

export type INavigationProps = StackScreenProps<RootStackParamList>;

const headerOptions = ({ navigation }: INavigationProps) => ({
	headerStyle: styles.headerStyle,
	headerLeft: () => <HeaderBackArrow onPress={navigation.goBack} />,
	headerTitle: () => (
		<View style={styles.headerTitleContainer}>
			<Text style={styles.headerTitleStyle}>Change this Text with Redux</Text>
		</View>
	),
	headerRight: () => <View style={styles.headerRightStyle} />,
});

const Stack = createStackNavigator();

export const HomeStack = () => (
	<Stack.Navigator initialRouteName={ROUTES.DASHBOARD}>
		<Stack.Screen
			name={ROUTES.DASHBOARD}
			component={Home}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen
			name={ROUTES.LEVELS}
			component={Levels}
			options={headerOptions}
		/>
		<Stack.Screen
			name={ROUTES.CHALLENGE}
			component={Challenge}
			options={headerOptions}
		/>
		<Stack.Screen name={ROUTES.RESULT} component={Result} />
	</Stack.Navigator>
);
