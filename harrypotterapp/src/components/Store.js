import { ActionTypes } from "./action-types";
import { createStore } from "redux";

const initialState = {
  characters: [],
  staff: [],
  students: [],
};

export const reducerCards = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CHARACTERS:
      return { ...state, characters: payload };
    case ActionTypes.SET_STAFF:
      return { ...state, staff: payload };
    case ActionTypes.SET_STUDENTS:
      return { ...state, students: payload };
    default:
      return state;
  }
};

export default createStore(reducerCards);
