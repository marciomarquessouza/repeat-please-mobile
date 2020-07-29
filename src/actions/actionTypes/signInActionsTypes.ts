export const SIGN_IN_REQUEST = 'signin/signin_request';

export interface ISignInRequesAction {
	readonly type: typeof SIGN_IN_REQUEST;
	email: string;
	password: string;
}

export const SIGN_IN_SUCCESS = 'signin/signin_success';

export interface ISignInSuccessAction {
	readonly type: typeof SIGN_IN_SUCCESS;
}

export const FORGOT_PASSWORD_REQUEST = 'signin/forgot_password_request';

export interface IForgotPasswordRequesAction {
	readonly type: typeof FORGOT_PASSWORD_REQUEST;
	email: string;
}

export const FORGOT_PASSWORD_SUCCESS = 'signin/forgot_password_success';

export interface IForgotPasswordSuccessAction {
	readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export const SIGN_IN_ERROR = 'signin/signin_error';

export interface ISignInErrorAction {
	readonly type: typeof SIGN_IN_ERROR;
	error: string;
}

export type SignInAction =
	| ISignInRequesAction
	| ISignInSuccessAction
	| IForgotPasswordRequesAction
	| IForgotPasswordSuccessAction
	| ISignInErrorAction;
