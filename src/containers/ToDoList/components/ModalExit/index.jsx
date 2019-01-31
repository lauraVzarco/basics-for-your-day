import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ModalExit extends Component {
  static propTypes = {
    handleExitModal: PropTypes.func
  }

  render() {
    return (
      <nav className="ModalBackground" onClick={ this.props.handleExitModal }>
        <div className="ModalContainer">
          <h2 className="ModalMessage"> Are you sure you want to exit? </h2>
          <div>
            <Link to="/">
              <button
                className="ModalButton_Yes">
                Yes
              </button>
            </Link>
            <button className="ModalButton_No"
              onClick={ this.props.handleExitModal }>
              Nope
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default ModalExit;