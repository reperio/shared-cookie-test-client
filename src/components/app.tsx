import React from 'react'
import {useSelector, useDispatch} from "react-redux";

import {State} from '../store/state';
import {incrementCounter} from '../actionCreators/appActionCreators';

export function App() {
    const counter = useSelector((state: State) => state.sampleProps.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{counter}</p>
            <p><button onClick={() => dispatch(incrementCounter())}>Increment</button></p>
        </div>
    );
}