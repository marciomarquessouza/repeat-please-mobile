import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Tts from 'react-native-tts';
import { IconButton } from '../IconButton';
import { styles } from './styles';

type StatusType = 'initiliazing' | 'ready' | 'speaking';

interface ITextToSpeechProps {
	text: string;
}

export const TextToSpeech = ({ text }: ITextToSpeechProps) => {
	const [status, setStatus] = useState<StatusType>('initiliazing');
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		Tts.addEventListener('tts-start', () => setStatus('speaking'));
		Tts.addEventListener('tts-finish', () => setStatus('ready'));
		Tts.getInitStatus()
			.then(initTextToSpeech)
			.then(() => setLoading(false));
	}, []);

	const initTextToSpeech = async () => {
		const voices = await Tts.voices();
		const availableVoice = voices
			.filter(voice => !voice.networkConnectionRequired && !voice.notInstalled)
			.filter(voice => voice.language === 'en-US')
			.map(voice => ({
				id: voice.id,
				name: voice.name,
				language: voice.language,
			}));
		if (availableVoice && availableVoice.length > 0) {
			try {
				await Tts.setDefaultLanguage(availableVoice[0].language);
				setStatus('ready');
			} catch (error) {
				console.error('set language error', error);
			}
		} else {
			// Some devices don't suport the voice, but are able to reproduce the sound
			console.error('Voice was not found.');
			setStatus('ready');
		}
	};

	const readText = async () => {
		Tts.stop().then(() => Tts.speak(text));
	};

	return (
		<View style={styles.cardBottom}>
			{status === 'ready' ? (
				<IconButton name="audio" onPress={readText} isLoading={loading} />
			) : (
				<IconButton name="audio" onPress={readText} isLoading={loading} />
			)}
		</View>
	);
};
