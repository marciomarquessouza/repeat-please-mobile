import React from 'react';
import { View, Text } from 'react-native';
import { IPAList } from '../../../components/IPAList';
import { styles } from '../style';
import { LEVELS } from '../../../navigator/routes';
import { useTranslation } from 'react-i18next';
import { IChallengeListProps } from './interface';

export const ChallengeList = ({
	navigation,
	wordsToPratice,
	wordsToReview,
	bestResults,
}: IChallengeListProps) => {
	const { t } = useTranslation();
	return (
		<>
			<View style={styles.sectionTitleContainer}>
				<Text style={styles.sectionTitleStyle}>{t('wordsToPratice')}</Text>
				<Text style={styles.sectionSubTitleStyle}>
					{t('wordsToPraticeScore')}
				</Text>
			</View>
			<View style={styles.listContainer}>
				<IPAList
					list={Object.values(wordsToPratice)}
					onPress={() => navigation.navigate(LEVELS)}
				/>
			</View>
			<View style={styles.sectionTitleContainer}>
				<Text style={styles.sectionTitleStyle}>{t('wordsToReview')}</Text>
				<Text style={styles.sectionSubTitleStyle}>
					{t('wordsToReviewScore')}
				</Text>
			</View>
			<View style={styles.listContainer}>
				<IPAList
					list={Object.values(wordsToReview)}
					onPress={() => navigation.navigate(LEVELS)}
				/>
			</View>
			<View style={styles.sectionTitleContainer}>
				<Text style={styles.sectionTitleStyle}>{t('bestResults')}</Text>
				<Text style={styles.sectionSubTitleStyle}>{t('bestResultsScore')}</Text>
			</View>
			<View style={styles.listContainer}>
				<IPAList
					list={Object.values(bestResults)}
					onPress={() => navigation.navigate(LEVELS)}
				/>
			</View>
		</>
	);
};
