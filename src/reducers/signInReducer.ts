import * as actions from '../actions/actionTypes/signInActionsTypes';

interface ISignInState {
	isLoading: boolean;
	error: string;
}

const initialState: ISignInState = {
	isLoading: false,
	error: '',
};

export const signInReducer = (
	state: ISignInState = initialState,
	action: actions.SignInAction,
): ISignInState => {
	switch (action.type) {
		case actions.SIGN_IN_REQUEST:
		case actions.FORGOT_PASSWORD_REQUEST:
			return {
				...state,
				error: '',
				isLoading: true,
			};
		case actions.SIGN_IN_SUCCESS:
		case actions.FORGOT_PASSWORD_SUCCESS:
		case actions.SIGN_IN_FINISH:
			return {
				...state,
				error: '',
				isLoading: false,
			};
		case actions.SIGN_IN_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		default:
			return {
				...state,
			};
	}
};
