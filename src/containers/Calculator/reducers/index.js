/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-operators */
import { calculatorModel } from '../models';

// Para operar

const symbolToOperate = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

const Calculator = (state = calculatorModel, action) => {
  if (action.type === 'CLEAR') { return calculatorModel; }
  if (action.type === 'ADD_NUMBER') {
    if (state.display === 0 && state.operator === '') {
      return {
        firstOperationNumber: action.payload,
        secondOperationNumber: 0,
        operator: '',
        result: 0,
        display: action.payload,
      };
    } if (state.display !== 0 && state.operator === '') {
      return {
        firstOperationNumber: state.firstOperationNumber + action.payload,
        secondOperationNumber: 0,
        operator: '',
        result: 0,
        display: state.display + action.payload
      };
    }
    if (state.operator !== '' && state.secondOperationNumber === 0) {
      return {
        firstOperationNumber: state.firstOperationNumber,
        secondOperationNumber: action.payload,
        operator: state.operator,
        result: 0,
        display: state.display + action.payload
      };
    } if (state.operator !== '' && state.secondOperationNumber !== 0) {
      return {
        firstOperationNumber: state.firstOperationNumber,
        secondOperationNumber: state.secondOperationNumber + action.payload,
        operator: state.operator,
        result: 0,
        display: state.display + state.secondOperationNumber
      };
    }
  } if (action.type === 'SELECT_OPERATOR') {
    return {
      firstOperationNumber: state.firstOperationNumber,
      secondOperationNumber: 0,
      operator: action.payload,
      result: 0,
      display: state.display + action.payload
    };
  }
  if (action.type === 'PRESS_EQUAL') {
    try {
      if (state.operator) {
        const selectedOperator = symbolToOperate[state.operator];
        const resultOperation = String(selectedOperator(Number(state.firstOperationNumber),
          Number(state.secondOperationNumber)));
        return {
          firstOperationNumber: resultOperation,
          secondOperationNumber: 0,
          operator: '',
          result: resultOperation,
          display: resultOperation
        };
      }
    } catch (error) {
      return 'oh no!';
    }
  }
  return state;
};

export default Calculator;