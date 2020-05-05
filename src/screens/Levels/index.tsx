import React from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { IIPA } from '../../components';
import { NavigationStackProp } from 'react-navigation-stack';
import { IPACard } from '../../components/IPACard';
import { styles } from './styles';

interface ILevelsProps {
	navigation: NavigationStackProp;
}

export const Levels = ({ navigation }: ILevelsProps) => {
	const { symbol, type }: IIPA = navigation.getParam('IPA');

	return (
		<ScrollView style={styles.container}>
			<SafeAreaView>
				<IPACard
					IPASymbol={symbol}
					stars={2}
					type={type}
					IPASound={() => undefined}
				/>
			</SafeAreaView>
			<Text style={styles.levelTitleStyle}>Select a Level</Text>
		</ScrollView>
	);
};
