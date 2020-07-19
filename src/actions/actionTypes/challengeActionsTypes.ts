import { SpeechResultType } from '../../../types/challenge';

export const START_CHALLENGE = 'challenge/start_challenge';

export interface IStartChallengeAction {
	readonly type: typeof START_CHALLENGE;
	index: number;
}

export const START_CHALLENGE_SUCCESS = 'challenge/start_challenge_success';

export interface IStartChallengeSuccessAction {
	readonly type: typeof START_CHALLENGE_SUCCESS;
}

export const SPEAK_CHALLENGE_REQUEST = 'challenge/speak_challenge_request';

export interface ISpeakChallengeRequestAction {
	readonly type: typeof SPEAK_CHALLENGE_REQUEST;
	text: string;
}

export const SPEAK_CHALLENGE_SUCCESS = 'challenge/speak_challenge_success';

export interface ISpeakChallengeSuccessAction {
	readonly type: typeof SPEAK_CHALLENGE_SUCCESS;
}

export const LISTEN_CHALLENGE_REQUEST = 'challenge/listen_challenge_request';

export interface IListenChallengeRequestAction {
	readonly type: typeof LISTEN_CHALLENGE_REQUEST;
}

export const LISTEN_CHALLENGE_SUCCESS = 'challenge/listen_challenge_result';

export interface IListenChallengeSuccessAction {
	readonly type: typeof LISTEN_CHALLENGE_SUCCESS;
	result: SpeechResultType;
	isTimerRunning: boolean;
	lastScore: number;
}

export const CHALLENGE_WAITING = 'challenge/challenge_waiting';

export interface IChallengeWaitingAction {
	readonly type: typeof CHALLENGE_WAITING;
}

export const CHALLENGE_TIMEOUT = 'challenge/challenge_timeout';

export interface IChallengeTimeoutAction {
	readonly type: typeof CHALLENGE_TIMEOUT;
}

export const CHALLENGE_FAILURE = 'challenge/challenge_failure';

export interface IChallengeFailureAction {
	readonly type: typeof CHALLENGE_FAILURE;
	error: Error | string;
}

export type ChallengeAction =
	| IChallengeTimeoutAction
	| IChallengeWaitingAction
	| IChallengeFailureAction
	| IStartChallengeAction
	| IStartChallengeSuccessAction
	| IListenChallengeRequestAction
	| IListenChallengeSuccessAction
	| ISpeakChallengeRequestAction
	| ISpeakChallengeSuccessAction;
