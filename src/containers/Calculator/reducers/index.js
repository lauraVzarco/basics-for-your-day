import { AppModel } from '../models';

//Para operar
const isDigitString = (char) => {
    return '0123456789'.includes(char)
}

const getOperation = (jsExpression) => {
    let firstNumber = '';
    let operator = '';
    let secondNumber = '';

    for (let index = 0; index < jsExpression.length; index++) {
        const value = jsExpression[index];
        if (isDigitString(value) && !operator) {
            firstNumber += value
        } else if (!isDigitString(value)) {
            operator = value
        } else if (isDigitString(value) && operator) {
            secondNumber += value
        }
    }
    return {
        firstNumber,
        operator,
        secondNumber
    }
}

const symbolToFnMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

const evaldata = (jsExpression) => {
    try {
        const operation = getOperation(jsExpression)
        if (operation.operator) {
            const selectedOperator = symbolToFnMap[operation.operator]
            return String(selectedOperator(Number(operation.firstNumber), Number(operation.secondNumber)))
        } else {
            return operation.firstNumber
        }
    } catch (error) {
        return 'oh no'
    }
}

const Calculator = (state = AppModel, action) => {
    if (action.type === "CLEAR")
        return AppModel
    else if (action.type === "EQUAL")
        return {
            display: evaldata(state.display)
        }
    else if (action.type === "BUTTON_NUMBER") {
        if (state.display === 0) {
            return {
                display: action.payload,
            }
        } else {
            return {
                display: state.display + action.payload
            }
        }
    } else if (action.type === "OPERATOR") {
        return {
            display: evaldata(state.display) + action.payload
        }
    }
    return state;
}

export default Calculator;