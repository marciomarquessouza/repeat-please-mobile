import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { IconIPA } from '../../components/IconsIPA';
import { Card } from 'repeat-please-styles';
import { CircularProgress } from 'repeat-please-styles';
import { styles } from './style';
import {
	wordsToPratice,
	wordsToReview,
	bestResults,
} from '../../__mocks__/IPA';

export const Home = () => {
	const [startAnimation, setStartAnimation] = useState(false);

	useEffect(() => {
		setStartAnimation(true);
	}, [startAnimation]);

	return (
		<View style={styles.wrapper}>
			<SafeAreaView>
				<SearchBar />
				<ScrollView>
					<View style={styles.container}>
						<View style={styles.cardContainer}>
							<Card
								title="Your daily challenge"
								subtitle="You have 15 new words to pratice"
								buttonLabel="START NOW"
								onPress={() => null}
							/>
						</View>
						<View style={styles.sectionTitleContainer}>
							<Text style={styles.sectionTitleStyle}>Your Weekly Progress</Text>
							<Text style={styles.sectionSubTitleStyle}>22 of 100 Words</Text>
						</View>
						<CircularProgress
							progress={0.25}
							duration={2000}
							startAnimation={startAnimation}
						/>
						<View style={styles.sectionTitleContainer}>
							<Text style={styles.sectionTitleStyle}>Words to Pratice</Text>
							<Text style={styles.sectionSubTitleStyle}>10% of success</Text>
						</View>
						<View style={styles.listContainer}>
							<IconIPA IPAList={Object.values(wordsToPratice)} />
						</View>
						<View style={styles.sectionTitleContainer}>
							<Text style={styles.sectionTitleStyle}>Words to Review</Text>
							<Text style={styles.sectionSubTitleStyle}>50% of success</Text>
						</View>
						<View style={styles.listContainer}>
							<IconIPA IPAList={Object.values(wordsToReview)} />
						</View>
						<View style={styles.sectionTitleContainer}>
							<Text style={styles.sectionTitleStyle}>Best Results</Text>
							<Text style={styles.sectionSubTitleStyle}>80% of success</Text>
						</View>
						<View style={styles.listContainer}>
							<IconIPA IPAList={Object.values(bestResults)} />
						</View>
						<View style={{ height: 100 }} />
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};
