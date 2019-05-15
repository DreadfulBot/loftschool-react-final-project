import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth, { sagas as AuthSagas } from './Auth';

export default combineReducers({ auth });

export function* rootSaga() {
    yield fork(AuthSagas);
}