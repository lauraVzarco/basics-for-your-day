import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class TodoPanel extends Component {
  static propTypes = {
    list: PropTypes.array,
    handleDone: PropTypes.func,
  }

  render() {
    const {
      list,
      handleDone,
    } = this.props;

    return (
      <ul className="todopaneList">
        {list.map((task, index) => (
          <li
            key={ index }
            className={ task.isDone ? 'done' : 'notdone' }
            onDoubleClick={ handleDone }
            data-value={ task.description }
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