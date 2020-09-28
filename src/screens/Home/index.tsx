import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { Card, CircularProgress } from 'repeat-please-styles';
import { styles } from './style';
import {
	wordsToPratice,
	wordsToReview,
	bestResults,
} from '../../__mocks__/IPA';
import { ChallengeList } from './ChallengesList';
import { useTranslation } from 'react-i18next';
import { ILevelsProps } from './interface';

export const Home = ({ navigation }: ILevelsProps) => {
	const [startAnimation, setStartAnimation] = useState(false);
	const { t } = useTranslation();

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
								title={t('dailyChallengeTitle')}
								subtitle={t('dailyChallengeSubTitle')}
								buttonLabel={t('dailyChallengeButton')}
								onPress={() => null}
							/>
						</View>
						<View style={styles.sectionTitleContainer}>
							<Text style={styles.sectionTitleStyle}>
								{t('weeklyProgreesTile')}
							</Text>
							<Text style={styles.sectionSubTitleStyle}>
								{t('weeklyProgreesSubTile')}
							</Text>
						</View>
						<CircularProgress
							progress={0.25}
							duration={2000}
							startAnimation={startAnimation}
							chartText={t('chartText')}
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
