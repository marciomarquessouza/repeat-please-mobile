import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { color } from 'repeat-please-styles';
import { CircularProgress } from 'repeat-please-styles';

export const Home = () => {
	const [startAnimation, setStartAnimation] = useState(false);

	useEffect(() => {
		setStartAnimation(true);
	}, [startAnimation]);

	return (
		<View style={styles.wrapper}>
			<SafeAreaView>
				<SearchBar />
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.chartContainer}>
							<Text style={styles.sectionTitleStyle}>Your Weekly Progress</Text>
							<Text style={styles.sectionSubTitleStyle}>22 of 100 Words</Text>
						</View>
						<CircularProgress
							progress={0.75}
							duration={1000}
							startAnimation={startAnimation}
						/>
					</ScrollView>
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
	chartContainer: {
		marginTop: 20,
		marginHorizontal: 20,
	},
	sectionTitleStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		lineHeight: 25,
	},
	sectionSubTitleStyle: {
		fontSize: 14,
		lineHeight: 25,
	},
});
