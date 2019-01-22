import React, { Component } from 'react';
import './style.css';

// import PropTypes from 'prop-types';

class TodoPanel extends Component {

  render() {
    const {
      // eslint-disable-next-line react/prop-types
      list,
      // eslint-disable-next-line react/prop-types
      handleDone,
    } = this.props;

    return (
      <ul className="todopanel_list">
        {list.map((task) => (
          <li
            key={ task.description }
            className={ task.isDone ? 'done' : 'notdone' }
            onDoubleClick={ handleDone }
            data-value={ ({ target }) => handleDone(target.dataset.value) }
          >
            {task.description}
          </li>
        ))
        }
      </ul>
    );
  }
}

export default TodoPanel;