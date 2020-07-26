import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { AUTHENTICATED, UNAUTHENTICATED } from '../../navigator/routes';
import * as firebase from 'firebase';

interface ILoadingProps {
	navigation: NavigationStackProp;
}

export const Loading = ({ navigation }: ILoadingProps) => {
	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			navigation.navigate(user ? AUTHENTICATED : UNAUTHENTICATED);
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
	},
});
