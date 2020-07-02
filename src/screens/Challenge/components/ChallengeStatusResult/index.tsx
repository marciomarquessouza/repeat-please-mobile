import React from 'react';
import { View, Text } from 'react-native';
import { SpeechResult } from '../SpeechResult';
import { StatusType, ResultType } from '../../../../hooks/useChallenge';
import { InitialCountdown, ChimpAudioWaves } from '../../../../components';
import { styles } from '../../styles';

interface IChallengeResultProps {
	status: StatusType;
	onCountdownFinish: () => void;
	result: ResultType;
}

export const ChallengeStatusResult = ({
	status,
	onCountdownFinish,
	result,
}: IChallengeResultProps) => (
	<View style={styles.resultContainer}>
		{status === 'countdown' && (
			<InitialCountdown hasFinished={onCountdownFinish} />
		)}
		{status === 'speaking' && (
			<View style={styles.listeningContainer}>
				<ChimpAudioWaves label="Speaking..." type="speaking" />
			</View>
		)}
		{status === 'listening' && (
			<View style={styles.listeningContainer}>
				<ChimpAudioWaves label="Listening..." />
			</View>
		)}
		{status === 'waiting' && (
			<Text style={styles.waitingStyle}>
				Click on Mic icon and repeat the word
			</Text>
		)}
		{status === 'result' && <SpeechResult result={result} />}
	</View>
);
