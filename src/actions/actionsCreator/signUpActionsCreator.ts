import * as actionsTypes from '../actionTypes/signUpActionsTypes';

export const signUpRequest = (
	user: actionsTypes.ISignUpRequestProps,
): actionsTypes.ISignUpRequestAction => ({
	type: actionsTypes.SIGN_UP_REQUEST,
	user,
});

export const signUpSuccess = (): actionsTypes.ISignUpSuccessAction => ({
	type: actionsTypes.SIGN_UP_SUCCESS,
});

export const signUpError = (
	error: string | Error,
): actionsTypes.ISignUpErrorAction => ({
	type: actionsTypes.SIGN_UP_ERROR,
	error,
});
