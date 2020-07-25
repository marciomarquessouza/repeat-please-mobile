import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { ButtonPrimary } from 'repeat-please-styles';
import * as firebase from 'firebase';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';

export const Options = () => {
	const { user } = useSelector((state: AppState) => state.user);
	return (
		<SafeAreaView style={styles.container}>
			<Text>Options Screen</Text>
			<View style={{ alignItems: 'center' }}>
				<Text
					style={{
						marginBottom: 10,
					}}>{`Hi ${user?.name} - (${user?.email})`}</Text>
				<ButtonPrimary onPress={() => firebase.auth().signOut()}>
					Log Out
				</ButtonPrimary>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
});
