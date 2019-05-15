import { handleActions } from 'redux-actions';
import { authRequest, authSuccess, authError } from './actions';
import { combineReducers } from 'redux';

const isAuth = handleActions({
    [authRequest]: () => false,
    [authSuccess]: (state, action) => action.payload,
    [authError]: () => false,
}, false);

export default combineReducers({isAuth});