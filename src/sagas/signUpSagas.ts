import { put, call, takeLatest, all, fork } from 'redux-saga/effects';
import * as signUpActions from '../actions/actionsCreator/signUpActionsCreator';
import * as signUpActionsTypes from '../actions/actionTypes/signUpActionsTypes';
import * as userActions from '../actions/actionsCreator/userActionsCreator';
import { signUpWithEmailPassword } from '../services/signUpServices';

function* onSignUp({ user }: signUpActionsTypes.ISignUpRequestAction) {
	try {
		const { userId } = yield call(signUpWithEmailPassword, user);
		yield put(userActions.getUserRequest(userId));
	} catch (error) {
		const message = error ? error.message : 'Register error';
		yield put(signUpActions.signUpError(message));
	}
}

function* watchonSignUp() {
	yield takeLatest(signUpActionsTypes.SIGN_UP_REQUEST, onSignUp);
}

export default function* signUpSaga() {
	yield all([fork(watchonSignUp)]);
}
