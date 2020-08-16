import { all, fork } from 'redux-saga/effects';
import signInSaga from './signInSagas';
import signUpSaga from './signUpSagas';
import userSaga from './userSagas';
import profileSaga from './profileSagas';

export default function* rootStaga() {
	yield all([
		fork(signInSaga),
		fork(signUpSaga),
		fork(userSaga),
		fork(profileSaga),
	]);
}
