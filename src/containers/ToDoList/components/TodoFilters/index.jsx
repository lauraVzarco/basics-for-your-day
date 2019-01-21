import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
// import PropTypes from 'prop-types';



class TodoFilters extends Component {

    render() {
        const {
            onClick,
            numberOfItems,
            selectedFilter
        } = this.props

        return (
            <Fragment>
                <div className="todofilter_counter"> {numberOfItems} items</div>
                <div className="todofilter_menu">
                    <Link to='?all'
                        className="todofilter_element">
                        <div
                            className={selectedFilter === "all" ? "active" : "inactive"}
                            data-value="all"
                            onClick={onClick}>
                            All
                        </div>
                    </Link>
                    <Link to='?uncompleted'
                        className="todofilter_element">
                        <div
                            className={selectedFilter === "uncompleted" ? "active" : "inactive"}
                            data-value="uncompleted"
                            onClick={onClick}>
                            Uncompleted
                    </div>
                    </Link>
                    <Link to='?completed'
                        className="todofilter_element">
                        <div
                            className={selectedFilter === "completed" ? "active" : "inactive"}
                            data-value="completed"
                            onClick={onClick}>
                            Completed
                        </div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default TodoFilters