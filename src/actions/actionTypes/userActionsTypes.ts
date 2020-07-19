import { UserType } from '../../../types/users';

export const GET_USERS_REQUEST = 'user/get_user_request';

export interface IGetUsersRequestAction {
	readonly type: typeof GET_USERS_REQUEST;
}

export const GET_USER_SUCCESS = 'user/get_user_success';

export interface IGetUserSucessAction {
	readonly type: typeof GET_USER_SUCCESS;
	users: UserType[];
}

export const USER_ERROR = 'user/get_user_error';

export interface IUserErrorAction {
	readonly type: typeof USER_ERROR;
	error: string | Error;
}

export type UserAction =
	| IGetUsersRequestAction
	| IGetUserSucessAction
	| IUserErrorAction;
