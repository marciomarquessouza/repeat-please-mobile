import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Tts from 'react-native-tts';
import { styles } from './styles';

interface ITextToSpeechProps {
	text: string;
	children: React.ReactNode;
}

export const TextToSpeech = ({ text, children }: ITextToSpeechProps) => {
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		Tts.addEventListener('tts-start', () => undefined);
		Tts.addEventListener('tts-finish', () => undefined);
		Tts.addEventListener('tts-cancel', () => undefined);
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
			} catch (error) {
				console.error('set language error', error);
			}
		} else {
			// Some devices don't suport the voice, but are able to reproduce the sound
			console.error('Voice was not found.');
		}
	};

	const readText = async () => {
		Tts.stop().then(() => Tts.speak(text));
	};

	return (
		<View style={styles.cardBottom}>
			<TouchableOpacity onPress={readText}>
				{loading ? <ActivityIndicator size="small" /> : children}
			</TouchableOpacity>
		</View>
	);
};
