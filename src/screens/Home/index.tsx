import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { SearchBar } from '../../components/SearchBar';
import { Card, CircularProgress } from 'repeat-please-styles';
import { styles } from './style';
import {
	wordsToPratice,
	wordsToReview,
	bestResults,
} from '../../__mocks__/IPA';
import { ChallengeList } from './ChallengesList';

interface ILevelsProps {
	navigation: NavigationStackProp;
}

export const Home = ({ navigation }: ILevelsProps) => {
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
						<ChallengeList
							{...{
								wordsToPratice,
								wordsToReview,
								bestResults,
								navigation,
							}}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};
