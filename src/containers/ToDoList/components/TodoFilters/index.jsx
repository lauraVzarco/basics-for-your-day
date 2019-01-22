import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
// import PropTypes from 'prop-types';

class TodoFilters extends Component {

  render() {
    // eslint-disable-next-line react/prop-types
    const { onClick, numberOfItems, selectedFilter } = this.props;
    const unCompletedClass = (selectedFilter !== 'uncompleted') ? 'inactive' : 'isActive';
    const completedClass = (selectedFilter !== 'completed') ? 'inactive' : 'isActive';
    const allClass = (selectedFilter !== null) ? 'inactive' : 'isActive';

    return (
      <Fragment>
        <div className="todofilter_counter"> {numberOfItems} items</div>
        <div className="todofilter_menu">
          <NavLink
            to={ { pathname: '/todolist' } }
            activeClassName={ allClass }
          >
            <div
              data-value="all"
              onClick={ onClick }>
                            All
            </div>
          </NavLink>
          <NavLink
            to={ { pathname: '/todolist', search: '?filter=uncompleted' } }
            activeClassName={ unCompletedClass }
          >
            <div
              data-value="uncompleted"
              onClick={ onClick }>
                            Uncompleted
            </div>
          </NavLink>
          <NavLink
            to={ { search: '?filter=completed' } }
            exact={ true } activeClassName={ completedClass }
          >
            <div
              data-value="completed"
              onClick={ onClick }>
                            Completed
            </div>
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default TodoFilters;