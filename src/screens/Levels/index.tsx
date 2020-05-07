import React from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { IPAType } from '../../types';
import { NavigationStackProp } from 'react-navigation-stack';
import { IPACard, LevelChoice } from '../../components';
import { CHALLENGE } from '../../navigator/routes';
import { levels } from './levels';
import { styles } from './styles';

interface ILevelsProps {
	navigation: NavigationStackProp;
}

export const Levels = ({ navigation }: ILevelsProps) => {
	const { symbol, type }: IPAType = navigation.getParam('IPA');

	return (
		<ScrollView style={styles.container}>
			<SafeAreaView>
				<IPACard
					IPASymbol={symbol}
					stars={2}
					type={type}
					IPASound={() => undefined}
				/>
				<Text style={styles.levelTitleStyle}>Select a Level</Text>
				<LevelChoice
					{...{ levels, onPress: () => navigation.navigate(CHALLENGE) }}
				/>
			</SafeAreaView>
		</ScrollView>
	);
};
