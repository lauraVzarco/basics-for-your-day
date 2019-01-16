import React, { Component, Fragment } from 'react';

// import PropTypes from 'prop-types';

class TodoFilters extends Component {
    render() {
        return (
            <Fragment>
                <div>X items</div>
                <button>All</button>
                <button>Active</button>
                <button>Complete</button>
            </Fragment>
        )
    }
}

export default TodoFilters