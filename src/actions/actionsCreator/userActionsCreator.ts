import * as actions from '../actionTypes/userActionsTypes';
import { UserType } from '../../../types/users';

export const getUserRequest = (): actions.IGetUsersRequestAction => ({
	type: actions.GET_USERS_REQUEST,
});

export const getUserSuccess = (
	users: UserType[],
): actions.IGetUserSucessAction => ({
	type: actions.GET_USER_SUCCESS,
	users,
});

export const userError = (error: Error | string): actions.IUserErrorAction => ({
	type: actions.USER_ERROR,
	error,
});
