import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class Button extends Component {
    static propTypes = {
        handleClick: PropTypes.func,
        name: PropTypes.string
    }
    static defaultProps = {
        name: ''
    }

    render() {
        const {
            onClick,
            name
        } = this.props;

        return (
            <Fragment>
                <button
                    className="Button-style"
                    value={name}
                    onClick={({ target }) => onClick(target.value)}
                >
                    {name}
                </button>
            </Fragment >
        );
    }
}

export default Button;