import { handleActions } from 'redux-actions';
import { authRequest, authSuccess, authError } from './actions';
import { combineReducers } from 'redux';

const isAuth = handleActions({
    [authRequest]: () => false,
    [authSuccess]: (state, action) => action.payload,
    [authError]: () => false,
}, false);

const isLoading = handleActions({
    [authRequest]: () => true,
    [authSuccess]: () => false,
    [authError]: () => false,
}, false);

const error = handleActions({
    [authRequest]: () => '',
    [authSuccess]: () => '',
    [authError]: (state, action) => action.payload
}, '')

const name = handleActions({
    [authRequest]: (state, action) => action.payload.name,
}, '');

const password = handleActions({
    [authRequest]: (state, action) => action.payload.password,
}, '');

export default combineReducers({isAuth, name, password, error, isLoading});