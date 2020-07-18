import Tts from 'react-native-tts';

interface IInitTextProps {
	language?: string;
	startListener?: () => void;
	finishListener?: () => void;
	cancelListener?: () => void;
}

const initTextToSpeech = async ({
	language = 'en-US',
	startListener = () => undefined,
	finishListener = () => undefined,
	cancelListener = () => undefined,
}: IInitTextProps) => {
	Tts.addEventListener('tts-start', startListener);
	Tts.addEventListener('tts-finish', finishListener);
	Tts.addEventListener('tts-cancel', cancelListener);
	const voices = await Tts.voices();
	const availableVoice = voices
		.filter(voice => !voice.networkConnectionRequired && !voice.notInstalled)
		.filter(voice => voice.language === language)
		.map(voice => ({
			id: voice.id,
			name: voice.name,
			language: voice.language,
		}));
	if (availableVoice && availableVoice.length > 0) {
		try {
			await Tts.setDefaultLanguage(availableVoice[0].language);
		} catch (error) {
			throw new Error(`set language error ${error}`);
		}
	} else {
		throw new Error('Voice was not found');
	}
};

const finishTextToSpeech = () => {
	Tts.removeEventListener('tts-start');
	Tts.removeEventListener('tts-finish');
	Tts.removeEventListener('tts-cancel');
};

export default {
	tts: Tts,
	initTextToSpeech,
	finishTextToSpeech,
};
