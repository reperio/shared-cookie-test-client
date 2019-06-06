import {State} from '../store/state';
import {Dispatch} from 'redux';

export const incrementCounter = () => async (dispatch: Dispatch, getState: () => State) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({type: 'INCREMENT_COUNTER'});
}