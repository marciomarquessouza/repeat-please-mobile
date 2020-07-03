import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Result = () => (
	<View>
		<Text style={styles.container}>Result Screen</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
