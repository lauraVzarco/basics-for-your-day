import { Record } from 'immutable';

export const CalculatorModel = Record({
  firstOperationNumber: 0,
  secondOperationNumber: 0,
  operator: '',
  result: 0,
  display: 0,
});

export const initialStateCalculator = new CalculatorModel();