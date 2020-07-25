import * as actions from '../actions/actionTypes/userActionsTypes';
import { UserType } from '../../types/users';

interface IUserState {
	user?: UserType;
	loading: boolean;
	error: string | Error;
}

export const initialState: IUserState = {
	user: undefined,
	loading: false,
	error: '',
};

export const userReducer = (
	state: IUserState = initialState,
	action: actions.UserActions,
): IUserState => {
	switch (action.type) {
		case actions.GET_USER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actions.GET_USER_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.user,
			};
		case actions.GET_USER_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return {
				...state,
			};
	}
};
