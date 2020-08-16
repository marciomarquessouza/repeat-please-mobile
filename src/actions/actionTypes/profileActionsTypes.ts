import { IProfile } from '../../../types/profile';

export const PROFILE_GET_REQUEST = 'profile/get_request';

export interface IProfileGetRequestAction {
	readonly type: typeof PROFILE_GET_REQUEST;
}

export const PROFILE_GET_SUCCESS = 'profile/get_success';

export interface IProfileGetSuccesstAction {
	readonly type: typeof PROFILE_GET_SUCCESS;
	profile: IProfile;
}

export const PROFILE_SET_REQUEST = 'profile/set_request';

export interface IProfileSetRequestAction {
	readonly type: typeof PROFILE_SET_REQUEST;
	profile: IProfile;
}

export const PROFILE_SET_SUCCESS = 'profile/set_success';

export interface IProfileSetSuccesstAction {
	readonly type: typeof PROFILE_SET_SUCCESS;
	profile: IProfile;
}

export const PROFILE_CLEAR_REQUEST = 'profile/clear_request';

export interface IProfileClearRequestAction {
	readonly type: typeof PROFILE_CLEAR_REQUEST;
}

export const PROFILE_CLEAR_SUCCESS = 'profile/clear_success';

export interface IProfileClearSuccessAction {
	readonly type: typeof PROFILE_CLEAR_SUCCESS;
}

export const PROFILE_ERROR = 'profile/profile_error';

export interface IProfileErrorAction {
	readonly type: typeof PROFILE_ERROR;
	error: string;
}

export type ProfileAction =
	| IProfileSetRequestAction
	| IProfileSetSuccesstAction
	| IProfileGetRequestAction
	| IProfileGetSuccesstAction
	| IProfileClearRequestAction
	| IProfileClearSuccessAction
	| IProfileErrorAction;
