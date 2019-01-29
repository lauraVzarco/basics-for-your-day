import { Record } from 'immutable';

export const calculatorModel = Record({
  firstOperationNumber: 0,
  secondOperationNumber: 0,
  operator: '',
  result: 0,
  display: 0,
});