import * as actions from '../actionTypes/profileActionsTypes';
import { IProfile } from '../../../types/profile';

export const setProfile = (
	profile: IProfile,
): actions.IProfileSetRequestAction => ({
	type: actions.PROFILE_SET_REQUEST,
	profile,
});

export const setProfileSuccess = (
	profile: IProfile,
): actions.IProfileSetSuccesstAction => ({
	type: actions.PROFILE_SET_SUCCESS,
	profile,
});

export const getProfile = (): actions.IProfileGetRequestAction => ({
	type: actions.PROFILE_GET_REQUEST,
});

export const getProfileSuccess = (
	profile: IProfile,
): actions.IProfileGetSuccesstAction => ({
	type: actions.PROFILE_GET_SUCCESS,
	profile,
});

export const clearProfile = (): actions.IProfileClearRequestAction => ({
	type: actions.PROFILE_CLEAR_REQUEST,
});

export const clearProfileSuccess = (): actions.IProfileClearSuccessAction => ({
	type: actions.PROFILE_CLEAR_SUCCESS,
});

export const profileError = (error: string): actions.IProfileErrorAction => ({
	type: actions.PROFILE_ERROR,
	error,
});
