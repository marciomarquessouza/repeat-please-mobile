import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { starsDescription } from '../../utils/starsDescription';

interface IIPACardProps {
	stars: number;
	type: 'vowel' | 'consonant';
	IPASymbol: string;
	IPASound: () => void;
	style?: ViewStyle;
}

const TOTAL_STAR = 3;

export const IPACard = ({
	stars,
	type,
	IPASymbol,
	IPASound,
	style,
}: IIPACardProps) => {
	const fullStars = new Array(stars).fill('');
	const emptyStars = new Array(TOTAL_STAR - stars).fill('');

	return (
		<View style={[styles.container, style]}>
			<View style={styles.cardHeader}>
				<View style={styles.symbolContainer}>
					<Text style={styles.IPASymbolStyle}>{IPASymbol}</Text>
					<Text style={styles.symbolType}>{type.toUpperCase()}</Text>
				</View>
				<View style={styles.scoreContainer}>
					<Text>Last Score</Text>
					<View style={styles.starContainer}>
						{fullStars.map((_, index) => (
							<Icon key={index} name="ios-star" size={20} style={styles.star} />
						))}
						{emptyStars.map((_, index) => (
							<Icon
								key={index}
								name="ios-star"
								size={20}
								style={[styles.star, styles.emptyStar]}
							/>
						))}
					</View>
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
};
