import {
  TOGGLE_TODO, ADD_TODO, CLEAR, WRITE_TODO
} from '../actionTypes';

export const submitTask = (task) => ({
  type: ADD_TODO,
  payload: task,
});

export const clickClear = (list) => ({
  type: CLEAR,
  payload: list,
});

export const writeTask = (task) => ({
  type: WRITE_TODO,
  payload: task,
});

export const toggleTask = (description) => ({
  type: TOGGLE_TODO,
  payload: description
});
