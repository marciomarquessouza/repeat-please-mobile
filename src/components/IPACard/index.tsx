import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { styles } from './styles';
import { starsDescription } from '../../utils/starsDescription';
import { Stars, IconButton } from '../';

interface IIPACardProps {
	stars: number;
	type: 'vowel' | 'consonant';
	IPASymbol: string;
	IPASound: () => void;
	style?: ViewStyle;
	isLoading?: boolean;
}

export const IPACard = ({
	stars,
	type,
	IPASymbol,
	IPASound,
	style,
	isLoading = false,
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
		<View style={styles.cardBottom}>
			<IconButton name="audio" onPress={IPASound} isLoading={isLoading} />
		</View>
	</View>
);
