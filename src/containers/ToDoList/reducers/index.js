import { todoModel } from '../models';

const TodoList = (state = todoModel, action) => {
  if (action.type === 'CLEAR') { return state; }
  if (action.type === 'ADD_TODO') {
    return {
      currentTaskDescription: action.payload
    };
  }
  if (action.type === 'SUBMIT') {
    const task = {
      description: action.payload,
      isDone: false,
    };
    return {
      currentTaskDescription: '',
      previousTasks: state.previousTasks.concat(task)
    };
  }
  if (action.type === 'IS_DONE') {
    const clickedTaskDescription = action.payload;
    // encontrar el index de la tarea seleccionada
    // eslint-disable-next-line max-len
    const selectedTaskIndex = state.previousTasks.findIndex(task => task.description === clickedTaskDescription);
    // Copiar el array de previous task y el objeto del task seleccionado
    const newPreviousTasks = [...state.previousTasks];
    const newSelectedTask = { ...state.previousTasks[selectedTaskIndex] };
    // cambiar el objeto, meterlo en el nuevo array
    newSelectedTask.isDone = !newSelectedTask.isDone;
    newPreviousTasks[selectedTaskIndex] = newSelectedTask;
    // cambiar el estado al array nuevo
    return {
      previousTasks: newPreviousTasks
    };
  }
  if (action.type === 'FILTER') {
    return 'ajja';
  }
  return state;
};

export default TodoList;