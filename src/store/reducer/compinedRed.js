import { combineReducers } from "redux";
import {favouriteReducer } from './favouriteRed'


export default combineReducers({
    favourite:favouriteReducer
})