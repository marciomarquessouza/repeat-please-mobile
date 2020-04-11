import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ButtonPrimary } from 'repeat-please-styles';
import * as firebase from 'firebase';

export const Options = () => (
	<View style={styles.container}>
		<Text>Options Screen</Text>
		<ButtonPrimary onPress={() => firebase.auth().signOut()}>
			Log Out
		</ButtonPrimary>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
});
