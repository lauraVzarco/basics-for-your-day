import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    modalMessage: PropTypes.string,
    handleClear: PropTypes.func,
    handleModal: PropTypes.func,
    handleExit: PropTypes.boolean
  }

  render() {
    return (
      <nav className="ModalBackground"
        onClick={ this.props.handleModal }>
        <div className="ModalContainer">
          <button className="ExitButton"
            onClick={ this.props.handleModal }>X</button>
          <h2 className="ModalMessage">
            Are you sure you want to
            {this.props.handleExit === true
              ? 'exit???' : ' delete your todo List???'}
          </h2>
          <div>
            {this.props.handleExit === true
              ? <Link to="/">
                <button
                  className="ModalButton_Yes"
                  onClick={ this.props.handleClear }>
                  Yep
                </button>
              </Link>
              : <button
                className="ModalButton_Yes"
                onClick={ this.props.handleClear }>
                Yep
              </button>}
            <button
              className="ModalButton_No"
              onClick={ this.props.handleModal }>
              Nope
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Modal;