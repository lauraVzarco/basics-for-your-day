import React, { Component } from 'react';
import './style.css'

// import PropTypes from 'prop-types';

class TodoPanel extends Component {

    render() {
        const {
            list,
            handleDone,
        } = this.props

        return (
            <ul
                onDoubleClick={handleDone}>
                {list.map((task) => <li key={task.description} className={task.isDone ? 'done' : 'notdone'} data-value={task.description}  > {task.description}
                </li>)}
            </ul>
        )
    }
}

export default TodoPanel