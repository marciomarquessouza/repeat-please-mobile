import { useReducer, useEffect } from 'react';
import TextToSpeech from '../../api/textToSpeech';
import SpeechToText from '../../api/speechToText';
import { reducer } from './reducer';

export type StatusType =
	| 'countdown'
	| 'speaking'
	| 'waiting'
	| 'listening'
	| 'result';

export type ResultType = {
	text: string;
	score: number;
	difference: { str: string; matches: boolean }[];
};

export type ChallengeAction =
	| { type: 'setStatus'; status: StatusType }
	| { type: 'speechText' }
	| { type: 'voiceRecognizing' }
	| { type: 'stopRecognizing' }
	| { type: 'speechResult'; result: string }
	| { type: 'nextChallenge' };

export interface IChallengeState {
	status: StatusType;
	result: ResultType;
	challenges: string[];
	index: number;
}

export const useChallenge = (
	challenges: string[],
): [IChallengeState, React.Dispatch<ChallengeAction>] => {
	const initialState: IChallengeState = {
		status: 'countdown',
		result: {
			text: '',
			score: 0,
			difference: [],
		},
		challenges,
		index: 0,
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		TextToSpeech.initTextToSpeech({
			finishListener: () => dispatch({ type: 'setStatus', status: 'waiting' }),
		});
		return () => {
			TextToSpeech.finishTextToSpeech();
		};
	}, []);

	useEffect(() => {
		SpeechToText.initSpeechToText({
			resultListener: (result: string) =>
				dispatch({ type: 'speechResult', result }),
		});
		return () => {
			SpeechToText.finishSpeechToText();
		};
	}, []);

	return [state, dispatch];
};
