import React from 'react';
import { View, Text } from 'react-native';
import {
	TextToSpeech,
	ChimpAudioWaves,
	InitialCountdown,
} from '../../../../components';
import { styles } from '../../styles';
import { StatusType } from '../../';

interface IStatusResultProps {
	status: StatusType;
	setStatus: (status: StatusType) => void;
	result?: string;
}

export const StatusResult = ({
	status,
	setStatus,
	result,
}: IStatusResultProps) => (
	<View style={styles.resultContainer}>
		{status === 'countdown' && (
			<InitialCountdown hasFinished={() => setStatus('initializing')} />
		)}
		{status === 'initializing' && (
			<View style={styles.listeningContainer}>
				<TextToSpeech
					text="task"
					startSpeech={true}
					delay={1000}
					onFinish={() => setStatus('started')}>
					<ChimpAudioWaves label="Speaking..." type="speaking" />
				</TextToSpeech>
			</View>
		)}
		{status === 'speaking' && (
			<View style={styles.listeningContainer}>
				<TextToSpeech
					text="task"
					startSpeech={true}
					delay={800}
					onFinish={() => setStatus('awaiting')}>
					<ChimpAudioWaves label="Speaking..." type="speaking" />
				</TextToSpeech>
			</View>
		)}
		{status === 'started' && (
			<View style={styles.listeningContainer}>
				<Text style={styles.awaitingStyle}>
					Your time Now (click on mic icon)...
				</Text>
			</View>
		)}
		{status === 'awaiting' && (
			<View style={styles.listeningContainer}>
				<Text style={styles.awaitingStyle}>Your time Now...</Text>
			</View>
		)}
		{status === 'listening' && (
			<View style={styles.listeningContainer}>
				<ChimpAudioWaves label="Listening..." />
			</View>
		)}
		<Text>{result}</Text>
	</View>
);
