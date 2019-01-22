import { combineReducers } from 'redux';
import Calculator from '../containers/Calculator/reducers';
import Todo from '../containers/TodoList/reducers';


export default combineReducers({ Calculator, Todo });
