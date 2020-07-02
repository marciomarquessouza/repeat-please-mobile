import TextToSpeech from '../../api/textToSpeech';
import SpeechToText from '../../api/speechToText';
import { stringsDifference, hightScoreWord } from '../../utils/compareStrings';
import { IChallengeState, ChallengeAction } from './';

export const reducer = (
	challenge: IChallengeState,
	action: ChallengeAction,
): IChallengeState => {
	const { challenges, index } = challenge;
	switch (action.type) {
		case 'setStatus':
			return { ...challenge, status: action.status };
		case 'speechText':
			TextToSpeech.tts
				.stop()
				.then(() => TextToSpeech.tts.speak(challenges[index]));
			return { ...challenge, status: 'speaking' };
		case 'voiceRecognizing':
			SpeechToText.startRecognizing();
			return { ...challenge, status: 'listening' };
		case 'voiceRecognizing':
			SpeechToText.stopRecognizing();
			return { ...challenge, status: 'waiting' };
		case 'speechResult':
			const { word, score } = hightScoreWord(action.result, challenges[index]);
			return {
				...challenge,
				status: 'result',
				result: {
					text: word,
					score,
					difference: stringsDifference(word, challenges[index]),
				},
			};
		default:
			return challenge;
	}
};
