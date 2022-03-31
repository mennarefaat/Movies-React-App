import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from './reducer/compinedRed'


export const store = createStore(combineReducers, composeWithDevTools())
