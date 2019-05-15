import { createSelector } from 'reselect';

export const getIsAuthorized = createSelector(
    state => state.auth.isAuth, isAuth => isAuth
);