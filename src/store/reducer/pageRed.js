import { SET_PAGE } from "../actions/types";
import { SET_LANGUAGE } from "../actions/types";

const INITIAL_STATE = {
  list: [],
  lang: ["en", "ar"],
};

export function pageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PAGE:
      console.log("no", action.payload);
      return {
        ...state,
        list: action.payload,
      };
    case SET_LANGUAGE:
      console.log("no", action.payload);
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
