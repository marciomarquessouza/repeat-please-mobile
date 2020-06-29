import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { styles } from './styles';
import { starsDescription } from '../../utils/starsDescription';
import { Stars } from '../Stars';
import { IconButton } from '../IconButton';

interface IIPACardProps {
	stars: number;
	type: 'vowel' | 'consonant';
	IPASymbol: string;
	style?: ViewStyle;
	onAudioPressed?: () => void;
	loading?: boolean;
}

export const IPACard = ({
	stars,
	type,
	IPASymbol,
	style,
	onAudioPressed,
	loading = false,
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
		<IconButton onPress={onAudioPressed} name="audio" isLoading={loading} />
	</View>
);
