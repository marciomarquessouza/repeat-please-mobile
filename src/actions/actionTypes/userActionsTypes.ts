import { UserType } from '../../../types/users';

export const GET_USER_REQUEST = 'user/get_user_request';

export interface IGetUserRequestAction {
	readonly type: typeof GET_USER_REQUEST;
	userId: string;
}

export const GET_USER_SUCCESS = 'user/get_user_success';

export interface IGetUserSuccessAction {
	readonly type: typeof GET_USER_SUCCESS;
	user: UserType;
}

export const GET_USER_ERROR = 'user/get_user_error';

export interface IGetUserErrorAction {
	readonly type: typeof GET_USER_ERROR;
	error: string;
}

export type UserActions =
	| IGetUserRequestAction
	| IGetUserSuccessAction
	| IGetUserErrorAction;
