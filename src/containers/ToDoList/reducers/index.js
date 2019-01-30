import { initialTodoModel } from '../models';

const TodoList = (state = initialTodoModel, action) => {
  if (action.type === 'CLEAR') {
    return state.clear();
  }
  if (action.type === 'ADD_TODO') {
    return state
      .update('listOfTasks', taskList => taskList.push(action.payload));
  }
  if (action.type === 'TOGGLE_TODO') {
    // para actualizar el estado, hay que entrar en la list (con 'listOfTasks', tasklist).
    // una vez dentro, a task list le puedo pasar una función para que haga lo que quiero:
    // que se actualice la tasklist unicamente actualizando el isDone a lo contrario 
    // que tenga el booleano: si es true, a false, y si es false, a true. Si quiero cambiar algo, 
    // puedo hacer arrowFunctions que ayuden a hacerlo correctamente, como en este caso.

    return state
      .update('listOfTasks', tasklist => {
        const index = tasklist.findIndex(task => task.description === action.payload);
        return tasklist.update(index, task => task.update('isDone', isDone => !isDone));
      });
  }
  return state;
};

export default TodoList;