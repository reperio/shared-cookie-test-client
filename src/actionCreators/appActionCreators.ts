import { authService } from './../services/authService';
import {State} from '../store/state';
import {Dispatch} from 'redux';

export const retrieveCurrentAuth = () => async (dispatch: Dispatch, getState: () => State) => {
    try {
        const currentAuth = JSON.stringify(await authService.retrieveCurrentAuth());
        dispatch({type: 'SET_CURRENT_AUTH', payload: {currentAuth}});
    } catch (e) {
        const currentAuth = '';
        dispatch({type: 'SET_CURRENT_AUTH', payload: {currentAuth}});
        throw e;
    }
}

export const submitAuth = () => async (dispatch: Dispatch, getState: () => State) => {
    await authService.postCookieAuth();
}

export const clearAuth = () => async (dispatch: Dispatch, getState: () => State) => {
    await authService.clearAuth();
}