import { useState, useEffect } from 'react';
import TextToSpeech from '../api/textToSpeech';

type StatusType =
	| 'waiting'
	| 'loading'
	| 'started'
	| 'finished'
	| 'canceled'
	| 'error';

export default (text: string): [() => Promise<void>, StatusType] => {
	const [statusTTS, setStatusTTS] = useState<StatusType>('loading');

	const readText = async () => {
		TextToSpeech.tts.stop().then(() => TextToSpeech.tts.speak(text));
	};

	useEffect(() => {
		TextToSpeech.initTextToSpeech({
			startListener: () => setStatusTTS('started'),
			finishListener: () => setStatusTTS('finished'),
		}).then(() => setStatusTTS('waiting'));
		return () => {
			TextToSpeech.finishTextToSpeech();
		};
	}, []);

	return [readText, statusTTS];
};
