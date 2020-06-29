import { useState, useEffect, useCallback } from 'react';
import TextToSpeech from '../api/textToSpeech';
import Voice from '@react-native-community/voice';

type StatusType = 'countdown' | 'speaking' | 'waiting' | 'listening' | 'result';

interface IUseChallenge {
	status: StatusType;
	result: string;
	speechText: () => Promise<void>;
	voiceRecognizing: () => Promise<void>;
	stopRecognizing: () => Promise<void>;
	error: string;
}

export const useChallenge = (text: string): IUseChallenge => {
	const [status, setStatus] = useState<StatusType>('countdown');
	const [result, setResult] = useState<string>('');
	const [error, setError] = useState<string>('');

	const speechText = async () => {
		TextToSpeech.tts.stop().then(() => TextToSpeech.tts.speak(text));
	};

	const onSpeechResults = useCallback(async (e: any) => {
		await stopRecognizing();
		setResult(e.value.join(' '));
		setStatus('result');
	}, []);

	const voiceRecognizing = async () => {
		setStatus('waiting');
		setResult('');

		try {
			await Voice.start('en-US');
			await Voice.isRecognizing();
			await Voice.getSpeechRecognitionServices();
		} catch (errorMessage) {
			setError(`Error on voice start: ${error}`);
		}
	};

	const stopRecognizing = async () => {
		try {
			await Voice.stop();
		} catch (errorMessage) {
			setError(`Error on voice stop': ${errorMessage}`);
		}
	};

	useEffect(() => {
		TextToSpeech.initTextToSpeech({
			startListener: () => setStatus('speaking'),
			finishListener: () => setStatus('waiting'),
		});
		return () => {
			TextToSpeech.finishTextToSpeech();
		};
	}, []);

	useEffect(() => {
		Voice.onSpeechStart = () => setStatus('listening');
		Voice.onSpeechEnd = () => setStatus('waiting');
		Voice.onSpeechResults = onSpeechResults;
		return () => {
			Voice.destroy().then(Voice.removeAllListeners);
		};
	}, [onSpeechResults]);

	return {
		status,
		result,
		speechText,
		voiceRecognizing,
		stopRecognizing,
		error,
	};
};
