import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from "connected-react-router";
import {History} from "history";
import {State} from "../store/state";
import { appReducer } from "./appReducer";


export const createRootReducer = (history: History) => combineReducers({
    auth: appReducer,
    router: connectRouter(history),
    form: formReducer
});
