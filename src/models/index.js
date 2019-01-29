import { initialStateCalculator } from '../containers/Calculator/models';
import { todoModel } from '../containers/TodoList/models/index.js';

export const initialState = {
  Calculator: initialStateCalculator,
  Todo: todoModel
};