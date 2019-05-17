import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth, { sagas as AuthSagas } from './Auth';
import profile from './Profile';

export default combineReducers({ auth, profile });

export function* rootSaga() {
    yield fork(AuthSagas);
}