export const SIGN_UP_REQUEST = 'signup/signup_reques';

export interface ISignUpRequestProps {
	name: string;
	username?: string;
	email: string;
	password: string;
}

export interface ISignUpRequestAction {
	readonly type: typeof SIGN_UP_REQUEST;
	user: ISignUpRequestProps;
}

export const SIGN_UP_SUCCESS = 'signup/signup_success';

export interface ISignUpSuccessAction {
	readonly type: typeof SIGN_UP_SUCCESS;
}

export const SIGN_UP_ERROR = 'signup/signup_error';

export interface ISignUpErrorAction {
	readonly type: typeof SIGN_UP_ERROR;
	error: string;
}

export type SignUpAction =
	| ISignUpRequestAction
	| ISignUpSuccessAction
	| ISignUpErrorAction;
