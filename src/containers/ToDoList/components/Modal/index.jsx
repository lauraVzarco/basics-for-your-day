import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class ClearButton extends Component {
  // static propTypes = {
  //   handleClear: PropTypes.func
  // }

  render() {
    return (
      <div className="ModalContainer">
        <div className="ModalMessage"> {this.props.message} </div>
        <div>
          <button className="ModalButton_Yes"> Yes </button>
          <button className="ModalButton_No"> Nope </button> </div>
      </div>
    );
  }
}

export default ClearButton;