import {
  PRESS_NUMBER, PRESS_CLEAR, PRESS_EQUAL, SELECT_OPERATOR
} from '../actionTypes';

export const pressNumber = (value) => ({
  type: PRESS_NUMBER,
  payload: value,
});

export const pressClear = (value) => ({
  type: PRESS_CLEAR,
  payload: value,
});

export const pressEqual = (value) => ({
  type: PRESS_EQUAL,
  payload: value,
});

export const clickOperator = (value) => ({
  type: SELECT_OPERATOR,
  payload: value,
});