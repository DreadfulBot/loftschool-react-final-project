import { createSelector } from 'reselect'

export const getProfile = createSelector(
    state => state.profile.profile, profile => profile
);

export const getError = createSelector(
    state => state.profile.error, error => error
);

export const getIsLoading = createSelector(
    state => state.profile.isLoading, isLoading => isLoading
);