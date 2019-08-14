import React from 'react'
import {useSelector, useDispatch} from "react-redux";

import {State} from '../store/state';
import {retrieveCurrentAuth, submitAuth, clearAuth} from '../actionCreators/appActionCreators';

export function App() {
    const currentAuth = useSelector((state: State) => state.auth.currentAuth);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Current auth: {currentAuth}</p>
            <p><button onClick={() => dispatch(retrieveCurrentAuth())}>Retrieve current auth</button></p>
            <p><button onClick={() => dispatch(submitAuth())}>Submit auth</button></p>
            <p><button onClick={() => dispatch(clearAuth())}>Clear auth</button></p>
        </div>
    );
}