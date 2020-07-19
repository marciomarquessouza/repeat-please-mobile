import { IChallengeState } from '../../types/challenge';
import * as actions from '../actions/actionTypes/challengeActionsTypes';

const initialState: IChallengeState = {
	status: 'countdown',
	speechResult: {
		text: '',
		score: 0,
		difference: [],
	},
	challenges: ['WORM', 'LOVE'],
	index: -1,
	totalScore: 0,
	error: '',
	isTimerRunning: false,
};

export const challengeReducer = (
	state: IChallengeState = initialState,
	action: actions.ChallengeAction,
): IChallengeState => {
	switch (action.type) {
		case actions.START_CHALLENGE:
			return {
				...state,
				status: 'speaking',
				index: action.index,
			};
		case actions.START_CHALLENGE_SUCCESS:
			return {
				...state,
				status: 'waiting',
				isTimerRunning: true,
			};
		case actions.SPEAK_CHALLENGE_REQUEST:
			return {
				...state,
				status: 'speaking',
			};
		case actions.SPEAK_CHALLENGE_SUCCESS:
			return {
				...state,
				status: 'waiting',
			};
		case actions.LISTEN_CHALLENGE_REQUEST:
			return {
				...state,
				status: 'listening',
			};
		case actions.LISTEN_CHALLENGE_SUCCESS:
			return {
				...state,
				status: 'result',
				speechResult: action.result,
				isTimerRunning: action.isTimerRunning,
				totalScore: state.totalScore + action.lastScore,
			};
		case actions.CHALLENGE_WAITING:
			return {
				...state,
				status: 'waiting',
			};
		case actions.CHALLENGE_TIMEOUT:
			return {
				...state,
				status: 'timeout',
				isTimerRunning: false,
			};
		case actions.CHALLENGE_FAILURE:
			return {
				...state,
				status: 'error',
				error: action.error,
			};
		default:
			return state;
	}
};
