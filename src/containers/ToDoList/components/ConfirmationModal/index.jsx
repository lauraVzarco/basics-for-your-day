import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class ConfirmationModal extends Component {
  static propTypes = {
    message: PropTypes.string,
    onAccept: PropTypes.func,
    closeModalWithEsc: PropTypes.func
  }

  state = {
    isVisible: false
  }

  setVisibility = isVisible => {
    this.setState({ isVisible });
  }

  // eslint-disable-next-line consistent-return
  closeModalWithEsc = (e) => {
    if (e.keyCode === 27) {
      this.setVisibility(false);
    } else return null;
  }


  render() {
    const { message, onAccept, closeModalWithEsc } = this.props;

    const title = ` Are you sure you want to ${message}`;

    const modal = this.state.isVisible && (
      <div className="ModalBackground" onClick={ () => this.setVisibility(false) } >
        <div className="ModalContainer">
          <button className="ExitButton" onClick={ () => this.setVisibility(false) }>X</button>

          <h2 className="ModalMessage">{title}</h2>

          <div>
            <button onClick={ () => this.setVisibility(false) }
              className="ModalButton_No" >
              Nope
            </button>
            <button onClick={ onAccept }
              className="ModalButton_Yes">
              Yep
            </button>
          </div>
        </div>
      </div>
    );

    return (
      <div onKeyPress={ closeModalWithEsc }>
        {modal}
        <div onClick={ () => this.setVisibility(true) }>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ConfirmationModal;