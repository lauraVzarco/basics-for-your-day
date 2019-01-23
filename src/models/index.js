import { AppModel } from '../containers/Calculator/models';
import { todoModel } from '../containers/TodoList/models/index.js';

export const initialState = {
  Calculator: AppModel,
  Todo: todoModel
};