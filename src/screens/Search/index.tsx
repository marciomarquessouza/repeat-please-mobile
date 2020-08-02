import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Search = () => {
	return (
		<View style={styles.container}>
			<Text>Search Screen</Text>
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
