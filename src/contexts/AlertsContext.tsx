import React, { createContext, useState } from 'react';
import { Alerts } from 'repeat-please-styles';
import {
	IAlertsState,
	IALertsContext,
	IProviderProps,
	IAlertsProps,
} from './types';
import { ALERT_TIME_OPENED } from '../constants/alerts';

const initialState: IAlertsState = {
	shown: false,
	message: '',
	type: 'error',
};

export const AlertsContext = createContext<IALertsContext>({
	showAlert: () => undefined,
	hideAlert: () => undefined,
});

export const AlertsProvider = ({ children }: IProviderProps) => {
	const [state, setState] = useState(initialState);

	const hideAlert = () => {
		setState({ ...state, shown: false });
	};

	const showAlert = (props: IAlertsProps) => {
		setState({ ...props, shown: true });
		const timeoutId = setTimeout(() => {
			hideAlert();
			clearTimeout(timeoutId);
		}, ALERT_TIME_OPENED);
	};

	return (
		<AlertsContext.Provider value={{ showAlert, hideAlert }}>
			{children}
			<Alerts {...{ ...state, onCloseModal: hideAlert }} />
		</AlertsContext.Provider>
	);
};
