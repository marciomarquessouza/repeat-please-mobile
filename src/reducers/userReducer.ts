import * as actions from '../actions/actionTypes/userActionsTypes';
import { UserType } from '../../types/users';

interface IUserState {
	users: UserType[];
	loading: boolean;
	error: string | Error;
}

export const initialState: IUserState = {
	users: [],
	loading: false,
	error: '',
};

export const userReducer = (
	state: IUserState = initialState,
	action: actions.UserAction,
): IUserState => {
	switch (action.type) {
		case actions.GET_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actions.GET_USER_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.users,
			};
		case actions.USER_ERROR:
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
