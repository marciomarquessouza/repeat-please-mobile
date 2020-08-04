import * as actions from '../actionTypes/signInActionsTypes';

export const signInRequest = (
	email: string,
	password: string,
): actions.ISignInRequesAction => ({
	type: actions.SIGN_IN_REQUEST,
	email,
	password,
});

export const signInSuccess = (): actions.ISignInSuccessAction => ({
	type: actions.SIGN_IN_SUCCESS,
});

export const signInFinish = (): actions.ISignInFinishAction => ({
	type: actions.SIGN_IN_FINISH,
});

export const forgotPasswordnRequest = (
	email: string,
): actions.IForgotPasswordRequesAction => ({
	type: actions.FORGOT_PASSWORD_REQUEST,
	email,
});

export const forgotPasswordSuccess = (): actions.IForgotPasswordSuccessAction => ({
	type: actions.FORGOT_PASSWORD_SUCCESS,
});

export const signInError = (error: string): actions.ISignInErrorAction => ({
	type: actions.SIGN_IN_ERROR,
	error,
});
