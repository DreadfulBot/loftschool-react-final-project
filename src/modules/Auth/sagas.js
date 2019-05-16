import { fork, call, take, takeEvery, put, cancel, cancelled } from 'redux-saga/effects';
import { authRequest, authSuccess, authError, logoutRequest } from './actions';
import { auth } from './api'; 

function *loginFlow() {
    while(true) {
        const request = yield take(authRequest);
        const { name, password } = request.payload;
        const task = yield fork(authorize, name, password);
        const action = yield take([logoutRequest, authError]);

        if(action.type === logoutRequest.toString()) {
            yield cancel(task);
        }
    }
}

const handleCancel = () => {

}

function *authorize(name, password) {
    try {
        const token = yield call(auth, name, password);
        yield put(authSuccess(token));
    } catch(error) {
        const { message } = error;
        yield put(authError(message));
    } finally {
        if(yield cancelled()) {
            yield call(handleCancel);
        }
    }
}

export default loginFlow;