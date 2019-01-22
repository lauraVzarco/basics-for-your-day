import React, { Component, Fragment } from 'react';
import './style.css';
// import PropTypes from 'prop-types';

class ClearButton extends Component {
  render() {
    return (
      <Fragment>
        <button
          // eslint-disable-next-line react/prop-types
          onClick={ this.props.handleClear }
          className="buttonClear">
                    Clear
        </button>
      </Fragment>
    );
  }
}

export default ClearButton;