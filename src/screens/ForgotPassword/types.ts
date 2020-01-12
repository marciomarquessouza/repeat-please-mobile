export interface IForgotPasswordState {
	email: string;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
	isSuccess: boolean;
	successMessage: string;
}
