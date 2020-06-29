import React from 'react';
import { View, Text, Image } from 'react-native';
import {
	monkeyTryAgain,
	monkeyAlmost,
	monkeyPerfect,
} from '../../../../../assets/images';
import { styles } from './styles';

interface ISpeechResultPros {
	result: string;
	score: number;
}

export const SpeechResult = ({ result, score }: ISpeechResultPros) => {
	let monkeyFace;
	let scoreText;

	switch (score) {
		case 3:
			monkeyFace = monkeyPerfect;
			scoreText = 'Perfect!!!';
			break;
		case 2:
			monkeyFace = monkeyAlmost;
			scoreText = 'Almost There...';
			break;
		default:
			monkeyFace = monkeyTryAgain;
			scoreText = 'Try Again...';
			break;
	}
	return (
		<View style={styles.container}>
			<Text style={styles.titleStyle}>RESULT</Text>
			<Text style={styles.resultStyle}>{result?.toUpperCase()}</Text>
			<Image style={styles.monkeyFaceStyle} source={monkeyFace} />
			<Text style={styles.scoreStyle}>{scoreText}</Text>
		</View>
	);
};
