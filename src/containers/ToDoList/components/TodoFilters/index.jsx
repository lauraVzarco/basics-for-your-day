import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

class TodoFilters extends Component {

    componentDidMount() {
        console.log(this.props.location.search) // "?filter=top&origin=im"
    }

    render() {
        const {
            onClick
        } = this.props

        return (
            <Fragment>
                <div>X items</div>
                <div
                    data-value="all"
                    onClick={onClick}>
                    All
                </div>
                <div
                    data-value="uncompleted"
                    onClick={onClick}>
                    Uncompleted
                    </div>
                <div
                    data-value="completed"
                    onClick={onClick}>
                    Completed
                </div>
            </Fragment>
        )
    }
}

export default TodoFilters