import { combineReducers } from "redux";
import {favouriteReducer } from './favouriteRed'
import {pageReducer } from './pageRed'


export default combineReducers({
    favourite:favouriteReducer,
    pageReducer:pageReducer
})