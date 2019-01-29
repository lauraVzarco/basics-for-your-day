import { Record, List } from 'immutable';

const ListOfTasks = List([]);

export const TodoModel = Record({
  listOfTasks: ListOfTasks
});

export const initialTodoModel = new TodoModel();
