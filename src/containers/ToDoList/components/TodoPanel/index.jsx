import React, { Component, Fragment } from 'react';

// import PropTypes from 'prop-types';

class TodoPanel extends Component {
    render() {
        const {
            previousTasks,
        } = this.props
        return (
            <Fragment>
                <ul>
                    {previousTasks.map((task) => <li key={task}> {task}
                    </li>)}
                </ul>
            </Fragment>
        )
    }
}

export default TodoPanel