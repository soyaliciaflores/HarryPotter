import { ActionTypes } from "./action-types";

export const setCharacters = (characters) => {
  return {
    type: ActionTypes.SET_CHARACTERS,
    payload: characters,
  };
};

export const setStaff = (staff) => {
  return {
    type: ActionTypes.SET_STAFF,
    payload: staff,
  };
};

export const setStudents = (students) => {
  return {
    type: ActionTypes.SET_STUDENTS,
    payload: students,
  };
};
