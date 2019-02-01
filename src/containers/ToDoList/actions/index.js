import {
  TOGGLE_TODO, ADD_TODO, CLEAR
} from '../actionTypes';

export const submitTask = (task) => ({
  type: ADD_TODO,
  payload: task,
});

export const pressClear = (list) => ({
  type: CLEAR,
  payload: list,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});
