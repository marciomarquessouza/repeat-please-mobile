import * as actions from '../actionTypes/challengeActionsTypes';
import { SpeechResultType } from '../../../types/challenge';

export const startChalenge = (
	index: number,
): actions.IStartChallengeAction => ({
	type: actions.START_CHALLENGE,
	index,
});

export const speakChallengeRequest = (
	text: string,
): actions.ISpeakChallengeRequestAction => ({
	type: actions.SPEAK_CHALLENGE_REQUEST,
	text,
});

export const speakChallengeSuccess = (): actions.ISpeakChallengeSuccessAction => ({
	type: actions.SPEAK_CHALLENGE_SUCCESS,
});

export const listenChallengeRequest = (): actions.IListenChallengeRequestAction => ({
	type: actions.LISTEN_CHALLENGE_REQUEST,
});

export const listenChallengeSuccess = (
	result: SpeechResultType,
	isTimerRunning: boolean,
	lastScore: number,
): actions.IListenChallengeSuccessAction => ({
	type: actions.LISTEN_CHALLENGE_SUCCESS,
	result,
	isTimerRunning,
	lastScore,
});

export const challengeTimeout = (): actions.IChallengeTimeoutAction => ({
	type: actions.CHALLENGE_TIMEOUT,
});

export const challengeWaiting = (): actions.IChallengeWaitingAction => ({
	type: actions.CHALLENGE_WAITING,
});

export const ChallengeFailure = (
	error: Error | string,
): actions.IChallengeFailureAction => ({
	type: actions.CHALLENGE_FAILURE,
	error,
});
