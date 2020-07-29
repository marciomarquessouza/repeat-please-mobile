export type AlertType = 'warning' | 'error' | 'success';

export interface IAlertsState {
	shown: boolean;
	message: string;
	type: AlertType;
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
