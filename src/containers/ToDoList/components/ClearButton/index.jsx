import React, { Component, Fragment } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class ClearButton extends Component {
  static propTypes = {
    handleModal: PropTypes.func
  }

  render() {
    return (
      <Fragment>
        <button
          onClick={ this.props.handleModal }
          className="buttonClear">
          Clear
        </button>
      </Fragment>
    );
  }
}

export default ClearButton;