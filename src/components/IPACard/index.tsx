import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { starsDescription } from '../../utils/starsDescription';
import { Stars } from '../Stars';

interface IIPACardProps {
	stars: number;
	type: 'vowel' | 'consonant';
	IPASymbol: string;
	IPASound: () => void;
	style?: ViewStyle;
}

export const IPACard = ({
	stars,
	type,
	IPASymbol,
	IPASound,
	style,
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
			<TouchableOpacity onPress={IPASound}>
				<Icon name="ios-volume-high" size={40} />
			</TouchableOpacity>
		</View>
	</View>
);
