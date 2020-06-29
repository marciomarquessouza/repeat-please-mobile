import Voice from '@react-native-community/voice';

interface ISpeechToText {
	startListener: () => void;
	finishListener: () => void;
	errorListener?: () => void;
	partialListener?: (text: string) => void;
	pitchListener?: (value: any) => void;
	resultListener: (text: string) => void;
}

const initSpeechToText = ({
	startListener,
	finishListener,
	errorListener = () => undefined,
	partialListener = () => undefined,
	pitchListener = () => undefined,
	resultListener,
}: ISpeechToText) => {
	Voice.onSpeechStart = startListener;
	Voice.onSpeechEnd = finishListener;
	Voice.onSpeechError = errorListener;
	Voice.onSpeechPartialResults = (e: any) => partialListener(e.value.join(' '));
	Voice.onSpeechVolumeChanged = (e: any) => pitchListener(e.value);
	Voice.onSpeechResults = (e: any) => resultListener(e.value.join(' '));
};

const finishSpeechToText = () => {
	Voice.destroy().then(Voice.removeAllListeners);
};

const startRecognizing = async (language = 'en-US') => {
	try {
		await Voice.start(language);
		await Voice.isRecognizing();
		await Voice.getSpeechRecognitionServices();
	} catch (error) {
		console.error('Error on voice start', error);
	}
};

export default {
	initSpeechToText,
	finishSpeechToText,
	startRecognizing,
	stopRecognizing: async () => await Voice.stop(),
};
