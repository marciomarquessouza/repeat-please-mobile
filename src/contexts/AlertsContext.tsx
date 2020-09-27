import React, { createContext, useState, useContext } from 'react';
import { Alerts } from 'repeat-please-styles';
import {
	IAlertsState,
	IALertsContext,
	IProviderProps,
	IAlertsProps,
} from './interface';
import { ALERT_TIME_OPENED } from '../constants/alerts';

const initialState: IAlertsState = {
	shown: false,
	message: '',
	type: 'error',
};

export const AlertsContext = createContext<IALertsContext>({
	showAlert: () => undefined,
});

export const AlertsProvider = ({ children }: IProviderProps) => {
	const [state, setState] = useState(initialState);

	const hideAlert = (props: IAlertsProps = state) => {
		setState({ ...props, shown: false });
	};

	const showAlert = (props: IAlertsProps) => {
		setState({ ...props, shown: true });
		const timeoutId = setTimeout(() => {
			hideAlert(props);
			clearTimeout(timeoutId);
		}, ALERT_TIME_OPENED);
	};

	return (
		<AlertsContext.Provider value={{ showAlert }}>
			{children}
			<Alerts {...{ ...state, onCloseModal: hideAlert }} />
		</AlertsContext.Provider>
	);
};

export const useAlertContext = () => useContext(AlertsContext);
