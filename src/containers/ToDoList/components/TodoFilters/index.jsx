import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';

class TodoFilters extends Component {

  static propTypes = {
    numberOfItems: PropTypes.number,
    selectedFilter: PropTypes.string
  }

  render() {
    const { numberOfItems, selectedFilter } = this.props;
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
            <div data-value="all">
              All
            </div>
          </NavLink>
          <NavLink
            to={ { pathname: '/todolist', search: '?filter=uncompleted' } }
            activeClassName={ unCompletedClass }
          >
            <div data-value="uncompleted">
              Uncompleted
            </div>
          </NavLink>
          <NavLink
            to={ { search: '?filter=completed' } }
            exact={ true } activeClassName={ completedClass }
          >
            <div data-value="completed">
              Completed
            </div>
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default TodoFilters;