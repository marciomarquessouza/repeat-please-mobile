import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { color } from 'repeat-please-styles';

export const Home = () => {
	return (
		<View style={styles.wrapper}>
			<SafeAreaView>
				<SearchBar />
				<View style={styles.container}>
					<Text>Welcome Screen</Text>
				</View>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: color.background,
	},
	scrollStyle: {
		backgroundColor: '#fff',
	},
	container: {
		height: '100%',
		backgroundColor: '#fff',
	},
});
