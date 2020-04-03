import React, { createContext, useReducer } from 'react';
import { Alerts } from 'repeat-please-styles';
import {
	ActionTypes,
	IAlertsState,
	IALertsContext,
	IProviderProps,
	IAlertsProps,
	IAlertsActions,
} from './types';

const initialState: IAlertsState = {
	shown: false,
	message: '',
	type: 'error',
};

export const AlertsContext = createContext<IALertsContext>({
	showAlert: () => {},
	hideAlert: () => {},
});

const alertsReducer = (
	state = initialState,
	action: IAlertsActions,
): IAlertsState => {
	const { type, payload } = action;
	switch (type) {
		case ActionTypes.SHOW_ALERT:
			return { ...payload, shown: true };
		case ActionTypes.HIDE_ALERT:
			return { ...state, shown: false };
		default:
			return state;
	}
};

export const AlertsProvider = ({ children }: IProviderProps) => {
	const [state, dispatch] = useReducer(alertsReducer, initialState);
	const { message, shown, type } = state;

	const showAlert = (props: IAlertsProps) => {
		dispatch({ type: ActionTypes.SHOW_ALERT, payload: { ...props } });
	};

	const hideAlert = () => {
		dispatch({ type: ActionTypes.HIDE_ALERT, payload: { ...state } });
	};

	return (
		<AlertsContext.Provider value={{ showAlert, hideAlert }}>
			{children}
			<Alerts {...{ message, shown, type, onCloseModal: hideAlert }} />
		</AlertsContext.Provider>
	);
};
