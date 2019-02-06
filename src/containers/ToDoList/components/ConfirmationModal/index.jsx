import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class ConfirmationModal extends Component {
  static propTypes = {
    message: PropTypes.string,
    onAccept: PropTypes.func,
    closeModalWithEsc: PropTypes.func,
    children: PropTypes.object
  }

  state = {
    isVisible: false
  }

  setVisibility = (isVisible) => {
    this.setState({ isVisible });
  }

  closeModalWithEsc = (e) => {
    if (e.keyCode === 27) {
      this.setVisibility(false);
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.closeModalWithEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModalWithEsc);
  }

  shouldComponentUpdate(nextState) {
    if (this.state.isVisible === false) return false;
    if (this.state.isVisible === true) return true;
    if (this.state.isVisible !== nextState.isVisible) return true;
    return false;
  }

  render() {
    const { message, onAccept, closeModalWithEsc } = this.props;

    const title = ` Are you sure you want to ${message}`;

    const modal = this.state.isVisible && (
      <div
        className="Background"
        onKeyPress={ closeModalWithEsc }
        onClick={ () => this.setVisibility(false) }
      >
        <div className="Foreground" onClick={ e => e.stopPropagation() }>
          <button className="ExitButton" onClick={ () => this.setVisibility(false) }>X</button>
          <h2 className="ModalMessage">{title}</h2>
          <div>
            <button onClick={ () => this.setVisibility(false) } className="ModalButton_No" >
              Nope
            </button>
            <button onClick={ onAccept } className="ModalButton_Yes">
              Yep
            </button>
          </div>
        </div>
      </div>
    );

    return (
      <div >
        {modal}
        <div onClick={ () => this.setVisibility(true) }>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ConfirmationModal;