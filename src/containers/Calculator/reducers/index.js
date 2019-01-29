import { initialStateCalculator } from '../models';

// Para operar

const symbolToOperate = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

const Calculator = (state = initialStateCalculator, action) => {
  if (action.type === 'PRESS_CLEAR') {
    const clearCalculator = state.clear();
    return clearCalculator;
  }
  if (action.type === 'PRESS_NUMBER') {
    if (state.display === 0 && state.operator === '') {
      return state
        .set('firstOperationNumber', action.payload)
        .set('display', action.payload);
    } if (state.display !== 0 && state.operator === '') {
      return state
        .set('firstOperationNumber', state.firstOperationNumber + action.payload)
        .set('display', state.display + action.payload);
    }
    if (state.operator !== '' && state.secondOperationNumber === 0) {
      return state
        .set('firstOperationNumber', state.firstOperationNumber)
        .set('secondOperationNumber', action.payload)
        .set('operator', state.operator)
        .set('display', state.display + action.payload);
    } if (state.operator !== '' && state.secondOperationNumber !== 0) {
      return state
        .set('firstOperationNumber', state.firstOperationNumber)
        .set('secondOperationNumber', state.secondOperationNumber + action.payload)
        .set('operator', state.operator)
        .set('display', state.display + state.secondOperationNumber);
    }
  } if (action.type === 'SELECT_OPERATOR') {
    return state
      .set('firstOperationNumber', state.firstOperationNumber)
      .set('operator', action.payload)
      .set('display', state.display + action.payload);
  }
  if (action.type === 'PRESS_EQUAL') {
    try {
      if (state.operator && state.secondOperationNumber) {
        const selectedOperator = symbolToOperate[state.operator];
        const resultOperation = String(selectedOperator(Number(state.firstOperationNumber),
          Number(state.secondOperationNumber)));
        return state
          .set('firstOperationNumber', resultOperation)
          .set('secondOperationNumber', 0)
          .set('result', resultOperation)
          .set('display', resultOperation);
      }
    } catch (error) {
      return 'oh no!';
    }
  }
  return state;
};

//     } if (state.operator !== '' && state.secondOperationNumber !== 0) {
//       return {
//         firstOperationNumber: state.firstOperationNumber,
//         secondOperationNumber: state.secondOperationNumber + action.payload,
//         operator: state.operator,
//         result: 0,
//         display: state.display + state.secondOperationNumber
//       };
//     }
//   } if (action.type === 'SELECT_OPERATOR') {
//     return {
//       firstOperationNumber: state.firstOperationNumber,
//       secondOperationNumber: 0,
//       operator: action.payload,
//       result: 0,
//       display: state.display + action.payload
//     };
//   }
//   if (action.type === 'PRESS_EQUAL') {
//     try {
//       if (state.operator) {
//         const selectedOperator = symbolToOperate[state.operator];
//         const resultOperation = String(selectedOperator(Number(state.firstOperationNumber),
//           Number(state.secondOperationNumber)));
//         return {
//           firstOperationNumber: resultOperation,
//           secondOperationNumber: 0,
//           operator: '',
//           result: resultOperation,
//           display: resultOperation
//         };
//       }
//     } catch (error) {
//       return 'oh no!';
//     }
//   }
//   return state;
// };

export default Calculator;