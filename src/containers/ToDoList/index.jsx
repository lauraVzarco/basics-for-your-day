import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Addtodo from './components/Addtodo';
import TodoPanel from './components/TodoPanel';
import TodoFilters from './components/TodoFilters';
import ClearButton from './components/ClearButton';
// import PropTypes from 'prop-types';

class TodoList extends Component {
    state = {
        currentTask: '',
        previousTasks: [],
        isDone: false
    }

    render() {
        return (
            <Fragment>
                <div>Todos</div>
                <div>
                    <ClearButton />
                    <Addtodo />
                    <TodoPanel />
                    <TodoFilters />
                </div>
                <Link to='/'>Home</Link>
            </Fragment>
        );
    }
}

export default TodoList