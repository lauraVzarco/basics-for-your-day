import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

class ToDoList extends Component {
    render() {
        return (
            <Fragment>
                <div>Esto es el to do List</div>
                <Link to='/'>Home</Link>
            </Fragment>
        )
    }
}

export default ToDoList