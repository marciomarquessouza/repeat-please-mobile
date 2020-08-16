export type TLevels = 'easy' | 'regular' | 'hard';

export type StatusType =
	| 'countdown'
	| 'speaking'
	| 'waiting'
	| 'listening'
	| 'result'
	| 'timeout'
	| 'error';

export type SpeechResultType = {
	text: string;
	score: number;
	difference: { str: string; matches: boolean }[];
};

export interface IChallengeState {
	status: StatusType;
	speechResult: SpeechResultType;
	challenges: string[];
	index: number;
	totalScore: number;
	error: Error | string;
	isTimerRunning: boolean;
}
