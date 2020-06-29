declare module 'react-native-tts' {
	export interface IVoice {
		id: string;
		name: string;
		language: string;
		quality?: number;
		latency?: number;
		networkConnectionRequired?: boolean;
		notInstalled?: boolean;
	}
	export function getInitStatus(): Promise<boolean | string>;
	export function requestInstallEngine(): Promise<boolean | string>;
	export function requestInstallData(): Promise<boolean | string>;
	export function setDucking(enabled: boolean): Promise<boolean | string>;
	export function setDefaultEngine(
		engineName: string,
	): Promise<boolean | string>;
	export function setDefaultVoice(voiceId: string): Promise<boolean | string>;
	export function setDefaultRate(
		rate: number,
		skipTransform?: boolean,
	): Promise<boolean | string>;
	export function setDefaultPitch(pitch: number): Promise<boolean | string>;
	export function setDefaultLanguage(
		language: string,
	): Promise<boolean | string>;
	export function setIgnoreSilentSwitch(
		ignoreSilentSwitch: string,
	): Promise<boolean | string>;
	export function voices(): Promise<IVoice[]>;
	export function engines(): Promise<[]>;
	export function speak(utterance: string, options?: {}): any;
	export function stop(onWordBoundary?: any): Promise<any>;
	export function pause(onWordBoundary: any): any;
	export function resume(): Promise<boolean | string>;
	export function addEventListener(
		type: string,
		handler: (...args: any[]) => any,
	): any;
	export function removeEventListener(
		type: string,
		handler?: (...args: any[]) => any,
	): void;
}
