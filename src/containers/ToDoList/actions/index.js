import {
  SUBMIT, IS_DONE, ADD_TODO, CLEAR, FILTER
} from '../actionTypes';

export const submit = (task) => ({
  type: SUBMIT,
  payload: task,
});

export const clickClear = (list) => ({
  type: CLEAR,
  payload: list,
});

export const writetask = (task) => ({
  type: ADD_TODO,
  payload: task,
});

export const dotask = (description) => ({
  type: IS_DONE,
  payload: description
});

export const showfilter = (list) => ({
  type: FILTER,
  payload: list,
});
