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
    def ault
    :
      return state;
  }
};

export default createStore(reducerCards);
