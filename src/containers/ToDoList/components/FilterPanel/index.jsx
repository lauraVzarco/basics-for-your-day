import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';

class FiltersPanel extends Component {

  static propTypes = {
    numberOfItems: PropTypes.number,
    selectedFilter: PropTypes.string
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.numberOfItems !== nextProps.numberOfItems) { return true; }
    if (this.props.selectedFilter !== nextProps.selectedFilter) return true;
    return false;
  }

  render() {
    const { numberOfItems, selectedFilter } = this.props;
    const unCompletedClass = (selectedFilter !== 'uncompleted') ? 'inactive' : 'isActive';
    const completedClass = (selectedFilter !== 'completed') ? 'inactive' : 'isActive';
    const allClass = (selectedFilter !== null) ? 'inactive' : 'isActive';
    const itemsInList = () => {
      if (numberOfItems === 1) { return `${numberOfItems} item`; }
      return `${numberOfItems} items`;
    };

    return (
      <Fragment>
        <div className="filterPanelCounter"> {itemsInList()} </div>
        <div className="filterPanelMenu">
          <NavLink to={ { pathname: '/todolist' } } activeClassName={ allClass }>
            <div data-value="all">
              All
            </div>
          </NavLink>
          <NavLink to={ { pathname: '/todolist', search: '?filter=uncompleted' } } activeClassName={ unCompletedClass } >
            <div data-value="uncompleted">
              Uncompleted
            </div>
          </NavLink>
          <NavLink to={ { search: '?filter=completed' } } exact={ true } activeClassName={ completedClass } >
            <div data-value="completed">
              Completed
            </div>
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default FiltersPanel;