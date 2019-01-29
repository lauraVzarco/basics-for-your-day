import { initialStateCalculator } from '../containers/Calculator/models';
import { initialTodoModel } from '../containers/TodoList/models/index.js';

export const initialState = {
  Calculator: initialStateCalculator,
  Todo: initialTodoModel
};