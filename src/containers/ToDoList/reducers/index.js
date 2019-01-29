import { initialTodoModel } from '../models';

const TodoList = (state = initialTodoModel, action) => {
  if (action.type === 'CLEAR') {
    return state.clear();
  }
  if (action.type === 'ADD_TODO') {
    const task = {
      description: action.payload,
      isDone: false,
    };
    return {
      listOfTasks: state.listOfTasks.concat(task)
    };
  }
  if (action.type === 'TOGGLE_TODO') {
    const clickedTaskDescription = action.payload;
    // encontrar el index de la tarea seleccionada
    // eslint-disable-next-line max-len
    const selectedTaskIndex = state.listOfTasks.findIndex(task => task.description === clickedTaskDescription);
    // Copiar el array de previous task y el objeto del task seleccionado
    const newListOfTasks = [...state.listOfTasks];
    const newAddedTask = { ...state.listOfTasks[selectedTaskIndex] };
    // cambiar el objeto, meterlo en el nuevo array
    newAddedTask.isDone = !newAddedTask.isDone;
    newListOfTasks[selectedTaskIndex] = newAddedTask;
    // cambiar el estado al array nuevo
    return {
      listOfTasks: newListOfTasks
    };
  }
  return state;
};

export default TodoList;