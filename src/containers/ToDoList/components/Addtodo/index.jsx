import React, { Component, Fragment } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class Addtodo extends Component {

  static propTypes = {
    todo: PropTypes.string,
    handleTask: PropTypes.func,
    onSubmit: PropTypes.func
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
          <label
            htmlFor="todo"
            className="addtodo_label"> Todo </label>
          <input
            type="text"
            placeholder="Whats need to be done?"
            className="addtodo_input"
            value={ todo }
            onChange={ handleTask }
          />
        </form>
      </Fragment>
    );
  }
}

export default Addtodo;