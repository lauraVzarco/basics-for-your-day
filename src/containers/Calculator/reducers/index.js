/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-operators */
import { AppModel } from '../models';

// Para operar

const symbolToOperate = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

const Calculator = (state = AppModel, action) => {
  if (action.type === 'CLEAR') { return AppModel; }
  if (action.type === 'ADD_NUMBER') {
    if (state.display === 0 && state.operator === '') {
      return {
        firstNumber: action.payload,
        secondNumber: 0,
        operator: '',
        result: 0,
        display: action.payload,
      };
    } if (state.display !== 0 && state.operator === '') {
      return {
        firstNumber: state.firstNumber + action.payload,
        secondNumber: 0,
        operator: '',
        result: 0,
        display: state.display + action.payload
      };
    }
    if (state.operator !== '' && state.secondNumber === 0) {
      return {
        firstNumber: state.firstNumber,
        secondNumber: action.payload,
        operator: state.operator,
        result: 0,
        display: state.display + action.payload
      };
    } if (state.operator !== '' && state.secondNumber !== 0) {
      return {
        firstNumber: state.firstNumber,
        secondNumber: state.secondNumber + action.payload,
        operator: state.operator,
        result: 0,
        display: state.display + state.secondNumber
      };
    }
  } if (action.type === 'SELECT_OPERATOR') {
    return {
      firstNumber: state.firstNumber,
      secondNumber: 0,
      operator: action.payload,
      result: 0,
      display: state.display + action.payload
    };
  }
  if (action.type === 'PRESS_EQUAL') {
    try {
      if (state.operator) {
        const selectedOperator = symbolToOperate[state.operator];
        const resultOperation = String(selectedOperator(Number(state.firstNumber),
          Number(state.secondNumber)));
        return {
          firstNumber: resultOperation,
          secondNumber: 0,
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