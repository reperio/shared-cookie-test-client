import { StateAuth } from './../store/state';
import { initialState } from '../store/initialState';

export function appReducer(state: StateAuth = initialState.auth, action: {type: string, payload: any}): StateAuth {
    switch (action.type) {
        case 'SET_CURRENT_AUTH': {
            const {currentAuth} = action.payload;
            return {
                ...state,
                currentAuth
            }
        }
        default:
            return state;
    }
}