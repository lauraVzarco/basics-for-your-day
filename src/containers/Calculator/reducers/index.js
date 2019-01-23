import { AppModel } from '../models';

// Para operar

// Busco que la tecla seleccionada contenga un digito
const isDigitString = (char) => '0123456789'.includes(char);

// creo tres expresiones, el primer número, el operador y el segundo número. 
// Si el valor pulsado es un número y no hay un operador, lo meto en el first number. 
// Al pulsar el operador, actualiza operator, y si meto otro número y hay un operador, second number
const getOperation = (jsExpression) => {
  let firstNumber = '';
  let operator = '';
  let secondNumber = '';

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < jsExpression.length; index++) {
    const value = jsExpression[index];
    if (isDigitString(value) && !operator) {
      firstNumber += value;
    } else if (!isDigitString(value)) {
      operator = value;
    } else if (isDigitString(value) && operator) {
      secondNumber += value;
    }
  }
  return {
    firstNumber,
    operator,
    secondNumber
  };
};

// eslint-disable-next-line max-len
// Buscas el tipo de operador y realizas la función que quieres. Suma, resta, multiplicación, división...
const symbolToFnMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

// eslint-disable-next-line max-len
// realizas la operación, llamas a la funcion get number y si hay un operador, llama a la que opera. Si no, se toma como firstnumber (Para cuando has dado igual y quieres continuar)
const evaldata = (jsExpression) => {
  try {
    const operation = getOperation(jsExpression);
    if (operation.operator) {
      const selectedOperator = symbolToFnMap[operation.operator];
      // eslint-disable-next-line max-len
      return String(selectedOperator(Number(operation.firstNumber), Number(operation.secondNumber)));
    }
    return operation.firstNumber;

  } catch (error) {
    return 'oh no';
  }
};

const Calculator = (state = AppModel, action) => {
  if (action.type === 'CLEAR') { return AppModel; }
  if (action.type === 'EQUAL') {
    return {
      display: evaldata(state.display)
    };
  } if (action.type === 'BUTTON_NUMBER') {
    if (state.display === 0) {
      return {
        display: action.payload,
      };
    }
    return {
      display: state.display + action.payload
    };

  } if (action.type === 'OPERATOR') {
    return {
      display: evaldata(state.display) + action.payload
    };
  }
  return state;
};

export default Calculator;