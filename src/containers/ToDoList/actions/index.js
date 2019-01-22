import {
  SUBMIT, IS_DONE, ADD_TODO, CLEAR, FILTER
} from '../actionTypes';

export const submitTask = (task) => ({
  type: SUBMIT,
  payload: task,
});

export const clickClear = (list) => ({
  type: CLEAR,
  payload: list,
});

export const writeTask = (task) => ({
  type: ADD_TODO,
  payload: task,
});

export const doTask = (description) => ({
  type: IS_DONE,
  payload: description
});

// export const showfilter = (list) => ({
//   type: FILTER,
//   payload: list,
// });
