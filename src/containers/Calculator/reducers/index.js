import { AppModel } from '../models'

//Para operar 
const evaldata = (jsExpression) => {
    try {
        return eval(jsExpression);
    } catch (error) {
        return 'oh no'
    }
}

const Calculator = (state = AppModel, action) => {
    if (action.type === "CLEAR")
        return AppModel
    else if (action.type === "EQUAL")
        return {
            display: evaldata(state.display),
            result: true
        }
    if (action.type === "BUTTON_NUMBER") {
        if (state.display === 0) {
            return {
                ...state,
                display: action.payload,
            }
        } else {
            return {
                ...state,
                display: state.display + action.payload
            }
        }
    }
    return state;
}

export default Calculator;