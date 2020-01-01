import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Home extends Component<{}, {}> {
	render() {
		return (
			<View style={styles.container}>
				<Text>Home</Text>
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
