import { initialStateCalculator } from '../models';

const symbolToOperate = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

const Calculator = (state = initialStateCalculator, action) => {
  if (action.type === 'PRESS_CLEAR') {
    if (state.firstOperationNumber !== 0) return state.clear();
  }
  if (action.type === 'PRESS_NUMBER') {
    if (state.firstOperationNumber === 0 && state.operator === '') {
      return state
        .set('firstOperationNumber', Number(action.payload));
    } if (state.firstOperationNumber !== 0 && state.operator === '') {
      return state
        .set('firstOperationNumber', Number(state.firstOperationNumber + action.payload));
    }
    if (state.operator !== '' && state.secondOperationNumber === 0) {
      return state
        .set('firstOperationNumber', state.firstOperationNumber)
        .set('secondOperationNumber', action.payload)
        .set('operator', state.operator);
    } if (state.operator !== '' && state.secondOperationNumber !== 0) {
      return state
        .set('firstOperationNumber', state.firstOperationNumber)
        .set('secondOperationNumber', state.secondOperationNumber + action.payload)
        .set('operator', state.operator);
    }
  } if (action.type === 'SELECT_OPERATOR') {
    return state
      .set('firstOperationNumber', state.firstOperationNumber)
      .set('operator', action.payload);
  }
  if (action.type === 'PRESS_EQUAL') {
    try {
      if (state.operator && state.secondOperationNumber) {
        const selectedOperator = symbolToOperate[state.operator];
        const resultOperation = String(selectedOperator(Number(state.firstOperationNumber),
          Number(state.secondOperationNumber)));
        return state
          .set('firstOperationNumber', Number(resultOperation))
          .set('secondOperationNumber', '')
          .set('operator', '');
      }
    } catch (error) {
      return state.set('firstOperationNumber', 'OH NO!!!!!!!!!');
    }
  }
  return state;
};

export default Calculator;