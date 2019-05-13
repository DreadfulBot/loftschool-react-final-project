import { fork, call, take, put, cancel, cancelled } from 'redux-saga/effects';
import { authRequest, authSuccess, authError, logoutRequest } from './actions';
import { auth } from './api'; 

function *loginFlow() {
    while(true) {
        const { name, password } = yield take(authRequest);
        const task = yield fork(authorize, name, password);
        const action = yield take([logoutRequest, authError]);

        if(action.type === logoutRequest.toString()) {
            yield cancel(task);
        }
    }
}

handleCancel = () => {

}

function *authorize(name, password) {
    try {
        const token = yield call(auth(name, password));
        yield put(authSuccess(token));
    } catch(error) {
        yield put(authError(error));
    } finally {
        if(yield cancelled()) {
            yield call(handleCancel);
        }
    }
}

export default loginFlow;