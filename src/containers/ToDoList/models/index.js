import { Record, List } from 'immutable';

export const TodoModel = Record({
  listOfTasks: List()
});

export const initialTodoModel = new TodoModel();
