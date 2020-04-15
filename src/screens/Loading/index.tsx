import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { AUTHENTICATED, UNAUTHENTICATED } from '../../navigator/routes';
import * as firebase from 'firebase';

interface ILoadingProps {
	navigation: NavigationStackProp;
}

export class Loading extends Component<ILoadingProps, {}> {
	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			const { navigation } = this.props;
			navigation.navigate(user ? AUTHENTICATED : UNAUTHENTICATED);
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
	},
});
