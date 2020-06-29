import { useState, useEffect, useCallback } from 'react';
import Voice from '@react-native-community/voice';

type StatusType = 'waiting' | 'started' | 'finished' | 'error';

export interface ISpeechToTextState {
	pitch: string;
	status: StatusType;
	results: string[];
	partialResults: string[];
}

export interface ISpeechtoTextProps {
	disabled?: boolean;
	onResult: (result: string) => void;
}

export default (): [string, () => Promise<void>, StatusType, string] => {
	const [speechStatus, setStatus] = useState<StatusType>('waiting');
	const [speechResults, setResults] = useState<string>('');
	const [pitch, setPitch] = useState<string>('');

	const onSpeechResults = useCallback((e: any) => {
		setResults(e.value.join(' '));
	}, []);

	const startRecognizing = async () => {
		setPitch('');
		setStatus('waiting');
		setResults('');

		try {
			await Voice.start('en-US');
			await Voice.isRecognizing();
			await Voice.getSpeechRecognitionServices();
		} catch (error) {
			console.error('Error on voice start', error);
		}
	};

	useEffect(() => {
		Voice.onSpeechStart = () => setStatus('started');
		Voice.onSpeechEnd = () => setStatus('finished');
		Voice.onSpeechError = () => setStatus('error');
		Voice.onSpeechPartialResults = (e: any) => setResults(e.value.join(' '));
		Voice.onSpeechVolumeChanged = (e: any) => setPitch(e.value);
		Voice.onSpeechResults = onSpeechResults;
		return () => {
			Voice.destroy().then(Voice.removeAllListeners);
		};
	}, [onSpeechResults]);

	return [speechResults, startRecognizing, speechStatus, pitch];
};
