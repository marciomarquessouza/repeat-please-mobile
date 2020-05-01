import React from 'react';
import { View, Text } from 'react-native';
import { IPAList } from '../../../components/IPAList';
import { styles } from '../style';
import { NavigationStackProp } from 'react-navigation-stack';
import { LEVELS } from '../../../navigator/routes';
import { IIPA } from '../../../types';

interface IChallengeListProps {
	navigation: NavigationStackProp;
	wordsToPratice: IIPA[];
	wordsToReview: IIPA[];
	bestResults: IIPA[];
}

export const ChallengeList = ({
	navigation,
	wordsToPratice,
	wordsToReview,
	bestResults,
}: IChallengeListProps) => (
	<>
		<View style={styles.sectionTitleContainer}>
			<Text style={styles.sectionTitleStyle}>Words to Pratice</Text>
			<Text style={styles.sectionSubTitleStyle}>10% of success</Text>
		</View>
		<View style={styles.listContainer}>
			<IPAList
				list={Object.values(wordsToPratice)}
				onPress={IPA => navigation.navigate(LEVELS, { IPA })}
			/>
		</View>
		<View style={styles.sectionTitleContainer}>
			<Text style={styles.sectionTitleStyle}>Words to Review</Text>
			<Text style={styles.sectionSubTitleStyle}>50% of success</Text>
		</View>
		<View style={styles.listContainer}>
			<IPAList
				list={Object.values(wordsToReview)}
				onPress={IPA => navigation.navigate(LEVELS, { IPA })}
			/>
		</View>
		<View style={styles.sectionTitleContainer}>
			<Text style={styles.sectionTitleStyle}>Best Results</Text>
			<Text style={styles.sectionSubTitleStyle}>80% of success</Text>
		</View>
		<View style={styles.listContainer}>
			<IPAList
				list={Object.values(bestResults)}
				onPress={IPA => navigation.navigate(LEVELS, { IPA })}
			/>
		</View>
	</>
);
