import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	ActivityIndicator,
	TextInput,
} from 'react-native';
import * as firebase from 'firebase';

export const Goals = () => {
	const dbRef = firebase.firestore().collection('users');
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit = () => {
		setLoading(true);
		dbRef
			.add({ name, email, username })
			.then(() => {
				setName('');
				setEmail('');
				setUsername('');
			})
			.catch(err => {
				console.error('fucking error', err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<View style={styles.container}>
			<Text>Goals Screen</Text>
			<View>
				<Text>Name:</Text>
				<TextInput placeholder="Name" onChangeText={text => setName(text)} />
				<Text>Email:</Text>
				<TextInput placeholder="Email" onChangeText={text => setEmail(text)} />
				<Text>Username:</Text>
				<TextInput
					placeholder="Username"
					onChangeText={text => setUsername(text)}
				/>
				<Button title="New User" onPress={onSubmit} />
			</View>
			<View>{loading && <ActivityIndicator size="large" />}</View>
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
