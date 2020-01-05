import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonPrimary } from 'repeat-please-styles';
import * as firebase from 'firebase';

export interface IHomeState {
	name: string;
	email: string;
}

export class Home extends Component<{}, IHomeState> {
	handleLogOut = (): void => {
		firebase.auth().signOut();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Welcome</Text>
				<ButtonPrimary onPress={this.handleLogOut}>Log Out</ButtonPrimary>
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

export default Home;
