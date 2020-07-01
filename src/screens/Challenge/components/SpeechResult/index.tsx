import React from 'react';
import { View, Text, Image } from 'react-native';
import {
	monkeyTryAgain,
	monkeyAlmost,
	monkeyPerfect,
} from '../../../../../assets/images';
import { ResultType } from '../../../../hooks/useChallenge';
import { styles } from './styles';

interface ISpeechResultPros {
	result: ResultType;
}

export const SpeechResult = ({ result }: ISpeechResultPros) => {
	let monkeyFace;
	let scoreText;

	if (result.score === 1) {
		monkeyFace = monkeyPerfect;
		scoreText = 'Perfect!!!';
	} else if (result.score > 0.3 && result.score < 1) {
		monkeyFace = monkeyAlmost;
		scoreText = 'Almost There...';
	} else {
		monkeyFace = monkeyTryAgain;
		scoreText = 'Try Again...';
	}

	return (
		<View style={styles.container}>
			<Text style={styles.titleStyle}>RESULT</Text>
			<View style={styles.resultContainer}>
				{result.difference.map(({ str, matches }, index) => (
					<Text
						style={[
							styles.resultStyle,
							{ color: matches ? '#000' : '#FF5733' },
						]}
						key={index}>
						{str}
					</Text>
				))}
			</View>
			<Image style={styles.monkeyFaceStyle} source={monkeyFace} />
			<Text style={styles.scoreStyle}>{scoreText}</Text>
		</View>
	);
};
