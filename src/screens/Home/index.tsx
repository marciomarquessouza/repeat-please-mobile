import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Home = () => {
	return (
		<View style={styles.container}>
			<Text>Welcome Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
