import React, { Component, Fragment } from 'react';

// import PropTypes from 'prop-types';

class Addtodo extends Component {
    render() {
        const {
            todo,
            handleTask,
            onSubmit
        } = this.props

        return (
            <Fragment>
                <form onSubmit={onSubmit}>
                    <label htmlFor="todo"> Todo </label>
                    <input
                        type="text"
                        placeholder='Whats need to be done?'
                        value={todo}
                        onChange={handleTask}
                    />
                </form>
            </Fragment>
        )
    }
}

export default Addtodo