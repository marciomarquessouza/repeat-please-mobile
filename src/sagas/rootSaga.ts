import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';

export default function* rootStaga() {
	yield all([fork(userSaga)]);
}
