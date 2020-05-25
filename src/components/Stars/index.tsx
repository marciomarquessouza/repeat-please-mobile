import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { starsDescription } from '../../utils/starsDescription';

interface IStarsProps {
	score: number;
}

const TOTAL_STAR = 3;

export const Stars = ({ score }: IStarsProps) => {
	const fullStars = new Array(score).fill('');
	const emptyStars = new Array(TOTAL_STAR - score).fill('');

	return (
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
	);
};

export { starsDescription };
