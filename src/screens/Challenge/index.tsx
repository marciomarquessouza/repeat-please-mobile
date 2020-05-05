import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { font, color } from 'repeat-please-styles';

export const Challenge = () => (
	<View style={styles.container}>
		<View style={styles.arcContainer}>
			<Text style={styles.repeatWordStyle}>TASK</Text>
			<Text style={styles.ipaStyle}>tæsk</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: color.background,
		overflow: 'hidden',
	},
	repeatWordStyle: {
		fontFamily: font.primary,
		fontSize: 60,
		letterSpacing: 15,
	},
	ipaStyle: {
		fontSize: 22,
	},
	arcContainer: {
		alignItems: 'center',
		overflow: 'hidden',
		width: 620,
		height: 310,
		backgroundColor: '#fff',
		borderBottomStartRadius: 310,
		borderBottomEndRadius: 310,
	},
});
