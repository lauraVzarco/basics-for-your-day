import React, { Component } from 'react';
import './style.css'

// import PropTypes from 'prop-types';

class TodoPanel extends Component {

    render() {
        const {
            previousTasks,
            handleDone,
        } = this.props

        return (
            <ul onDoubleClick={handleDone}>
                {previousTasks.map((task) => <li key={task.description} className={task.isDone ? 'done' : 'notdone'} data-value={task.description}  > {task.description}
                </li>)}
            </ul>
        )
    }
}

export default TodoPanel