import React, { Component, Fragment } from 'react';
import './style.css';
// import PropTypes from 'prop-types';

class Addtodo extends Component {
  render() {
    const {
      // eslint-disable-next-line react/prop-types
      todo,
      // eslint-disable-next-line react/prop-types
      handleTask,
      // eslint-disable-next-line react/prop-types
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
            onChange={ ({ target }) => handleTask(target.value) }
          />
        </form>
      </Fragment>
    );
  }
}

export default Addtodo;