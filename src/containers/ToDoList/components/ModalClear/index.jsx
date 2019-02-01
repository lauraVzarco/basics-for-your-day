import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class ModalClear extends Component {
  static propTypes = {
    handleClear: PropTypes.func,
    handleClearModal: PropTypes.func
  }

  render() {
    return (
      <nav className="ModalBackground" onClick={ this.props.handleClearModal }>
        <div className="ModalContainer">
          <button className="ExitButton" onClick={ this.props.handleClearModal }>X</button>
          <h2 className="ModalMessage"> Are you sure you want to delete your todoList? </h2>
          <div>
            <button className="ModalButton_Yes"
              onClick={ this.props.handleClear }>
              Yes
            </button>
            <button className="ModalButton_No"
              onClick={ this.props.handleClearModal }>
              Nope
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default ModalClear;