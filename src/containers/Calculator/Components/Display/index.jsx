import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Display extends Component {
  static propTypes = {
    value: PropTypes.number,
    display: PropTypes.string
  }

  render() {
    return (
      <Fragment>
        <div className="Display">
          <div className="littleDisplay">
            {this.props.value}
          </div>
          < div className="DisplayContent" >
            {this.props.display}
          </div >
        </div>
      </Fragment>
    );
  }
}

export default Display;