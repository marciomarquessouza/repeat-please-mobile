import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { styles } from './styles';
import { starsDescription } from '../../utils/starsDescription';
import { Stars } from '../Stars';

interface IIPACardProps {
	stars: number;
	type: 'vowel' | 'consonant';
	IPASymbol: string;
	style?: ViewStyle;
	bottom?: React.ReactNode;
}

export const IPACard = ({
	stars,
	type,
	IPASymbol,
	style,
	bottom,
}: IIPACardProps) => (
	<View style={[styles.container, style]}>
		<View style={styles.cardHeader}>
			<View style={styles.symbolContainer}>
				<Text style={styles.IPASymbolStyle}>{IPASymbol}</Text>
				<Text style={styles.symbolType}>{type.toUpperCase()}</Text>
			</View>
			<View style={styles.scoreContainer}>
				<Text>Last Score</Text>
				<Stars score={stars} />
				<Text>{starsDescription(stars)}</Text>
			</View>
		</View>
		{bottom}
	</View>
);
