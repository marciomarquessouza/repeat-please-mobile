import { UserType } from '../../../types/users';
import * as actions from '../actionTypes/userActionsTypes';

export const getUserRequest = (
	userId: string,
): actions.IGetUserRequestAction => ({
	type: actions.GET_USER_REQUEST,
	userId,
});

export const getUserSuccess = (
	user: UserType,
): actions.IGetUserSuccessAction => ({
	type: actions.GET_USER_SUCCESS,
	user,
});

export const getUserError = (
	error: string | Error,
): actions.IGetUserErrorAction => ({
	type: actions.GET_USER_ERROR,
	error,
});
