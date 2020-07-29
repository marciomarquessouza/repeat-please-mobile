import * as actions from '../actions/actionTypes/signUpActionsTypes';

interface ISignUpState {
	isLoading: boolean;
	error: string;
}

export const initialState: ISignUpState = {
	isLoading: false,
	error: '',
};

export const signUpReducer = (
	state: ISignUpState = initialState,
	action: actions.SignUpAction,
): ISignUpState => {
	switch (action.type) {
		case actions.SIGN_UP_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actions.SIGN_UP_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case actions.SIGN_UP_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.error,
			};
		default:
			return {
				...state,
			};
	}
};
