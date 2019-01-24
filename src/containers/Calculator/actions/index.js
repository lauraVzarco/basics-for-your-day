import {
  ADD_NUMBER, CLEAR, PRESS_EQUAL, SELECT_OPERATOR
} from '../actionTypes';

export const clickNumber = (value) => ({
  type: ADD_NUMBER,
  payload: value,
});

export const clickClear = (value) => ({
  type: CLEAR,
  payload: value,
});

export const clickEqual = (value) => ({
  type: PRESS_EQUAL,
  payload: value,
});

export const clickOperator = (value) => ({
  type: SELECT_OPERATOR,
  payload: value,
});