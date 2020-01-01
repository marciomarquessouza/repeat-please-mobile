import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import { goToScreen, INavigate } from '../../navigator/helper';

interface ILoadingProps {
	navigation: INavigate;
}

export class Loading extends Component<ILoadingProps, {}> {
	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			const { navigation } = this.props;
			goToScreen(navigation, user ? 'App' : 'Auth');
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

export default Loading;
