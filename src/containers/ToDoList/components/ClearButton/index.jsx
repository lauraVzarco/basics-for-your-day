import React, { Component, Fragment } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class ClearButton extends Component {
  static propTypes = {
    handleModal: PropTypes.func
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Fragment>
        <button className="buttonClear">
          Clear
        </button>
      </Fragment>
    );
  }
}

export default ClearButton;