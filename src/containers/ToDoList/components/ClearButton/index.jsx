import React, { Component, Fragment } from 'react';

// import PropTypes from 'prop-types';

class ClearButton extends Component {
    render() {
        return (
            <Fragment>
                <button onClick={this.props.handleClear}>ClearButton</button>
            </Fragment>
        )
    }
}

export default ClearButton