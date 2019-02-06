import React, { Component, Fragment } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class InputTodo extends Component {

  static propTypes = {
    todo: PropTypes.string,
    handleTask: PropTypes.func,
    onSubmit: PropTypes.func
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.onSubmit !== nextProps.onSubmit) return true;
    return true;
  }

  render() {
    const {
      todo,
      handleTask,
      onSubmit,
    } = this.props;

    return (
      <Fragment>
        <form onSubmit={ onSubmit }>
          <label htmlFor="todo" className="inputTodoLabel"> Todo </label>
          <input type="text"
            placeholder="Whats need to be done?"
            className="inputTodoInput"
            value={ todo }
            onChange={ handleTask }
          />
        </form>
      </Fragment>
    );
  }
}

export default InputTodo;