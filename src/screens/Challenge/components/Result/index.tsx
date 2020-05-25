import React from 'react';
import { Text } from 'react-native';
import { Stars, starsDescription } from '../../../../components';
import { styles } from '../../styles';

interface IResultProps {
	repeat: string;
	score: number;
}

export const Result = ({ repeat, score }: IResultProps) => (
	<>
		<Text style={styles.resultTextStyle}>{repeat.toUpperCase()}</Text>
		<Stars score={score} />
		<Text style={styles.starsDescriptionTextStyle}>
			{starsDescription(score)}
		</Text>
	</>
);
