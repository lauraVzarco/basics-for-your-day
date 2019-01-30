import { Record } from 'immutable';

export const CalculatorModel = Record({
  firstOperationNumber: 0,
  secondOperationNumber: '',
  operator: '',
});

export const initialStateCalculator = new CalculatorModel();