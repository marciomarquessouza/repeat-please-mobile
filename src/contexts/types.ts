export type AlertType = 'warning' | 'error' | 'success';

export enum ActionTypes {
	SHOW_ALERT = 'SHOW_ALERT',
	HIDE_ALERT = 'HIDE_ALERT',
}

export interface IAlertsState {
	shown: boolean;
	message: string;
	type: 'warning' | 'error' | 'success';
}

export interface IALertsContext {
	showAlert: (props: IAlertsProps) => void;
	hideAlert: () => void;
}

export interface IProviderProps {
	children: any;
}

export interface IAlertsProps {
	message: string;
	type: AlertType;
}

export interface IAlertsActions {
	type: ActionTypes;
	payload: IAlertsProps;
}
