import {
	call,
	put,
	takeLatest,
	takeEvery,
	all,
	fork,
} from 'redux-saga/effects';
import * as signInActions from '../actions/actionsCreator/signInActionsCreators';
import * as signInActionsTypes from '../actions/actionTypes/signInActionsTypes';
import * as userAction from '../actions/actionsCreator/userActionsCreator';
import {
	signInWithEmailPassword,
	ISignInWithEmailPassword,
	forgotPassword,
} from '../services/signInServices';

function* onSignIn({
	email,
	password,
}: signInActionsTypes.ISignInRequesAction) {
	try {
		const { userId }: ISignInWithEmailPassword = yield call(
			signInWithEmailPassword,
			email,
			password,
		);
		yield put(userAction.getUserRequest(userId));
		yield put(signInActions.signInSuccess());
	} catch (error) {
		const message = error ? error.message : 'Login error';
		yield put(signInActions.signInError(message));
	}
}

function* watchOnSignIn() {
	yield takeEvery(signInActionsTypes.SIGN_IN_REQUEST, onSignIn);
}

function* onForgotPassword({
	email,
}: signInActionsTypes.IForgotPasswordRequesAction) {
	try {
		yield call(forgotPassword, email);
		yield put(signInActions.forgotPasswordSuccess());
	} catch (error) {
		const message = error ? error.message : 'Login error';
		yield put(signInActions.signInError(message));
	}
}

function* watchOnForgotPassword() {
	yield takeLatest(
		signInActionsTypes.FORGOT_PASSWORD_REQUEST,
		onForgotPassword,
	);
}

export default function* signInSaga() {
	yield all([fork(watchOnSignIn), fork(watchOnForgotPassword)]);
}
