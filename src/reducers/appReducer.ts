import { StateSampleProps } from './../store/state';
import { initialState } from '../store/initialState';

export function appReducer(state: StateSampleProps = initialState.sampleProps, action: {type: string, payload: any}): StateSampleProps {
    switch (action.type) {
        case 'INCREMENT_COUNTER': {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        case 'DECREMENT_COUNTER': {
            return {
                ...state,
                counter: state.counter - 1
            };
        }
        default:
            return state;
    }
}