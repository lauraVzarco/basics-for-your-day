import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"
// import PropTypes from 'prop-types';

class TodoFilters extends Component {

    render() {
        const {
            onClick,
            numberOfItems,
        } = this.props

        return (
            <Fragment>
                <div className="todofilter_counter"> {numberOfItems} items</div>
                <div className="todofilter_menu">
                    <NavLink
                        to={{ pathname: "/todolist" }}
                        activeClassName="isActive"
                    >
                        <div
                            className="inactive"
                            data-value="all"
                            onClick={onClick}>
                            All
                        </div>
                    </NavLink>
                    <NavLink
                        to={{ pathname: "/todolist", search: '?filter=uncompleted' }}
                        activeClassName="isActive"
                    >
                        <div
                            className="inactive"
                            data-value="uncompleted"
                            onClick={onClick}>
                            Uncompleted
                    </div>
                    </NavLink>
                    <NavLink
                        to={{ search: '?filter=completed' }}
                        exact activeClassName="isActive"
                    >
                        <div
                            className="inactive"
                            data-value="completed"
                            onClick={onClick}>
                            Completed
                        </div>
                    </NavLink>
                </div>
            </Fragment>
        )
    }
}

export default TodoFilters