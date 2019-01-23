import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Addtodo from './components/Addtodo';
import TodoPanel from './components/TodoPanel';
import TodoFilters from './components/TodoFilters';
import ClearButton from './components/ClearButton';
import './style.css';
import {
  submitTask, clickClear, writeTask, toggleTask
} from './actions';

class TodoList extends Component {
  static propTypes = {
    writeTask: PropTypes.func,
    submitTask: PropTypes.func,
    toggleTask: PropTypes.func,
    clear: PropTypes.func,
    location: PropTypes.object,
    previousTasks: PropTypes.array,
    currentTaskDescription: PropTypes.string
  }

  handleTask = e => { this.props.writeTask(e.target.value); }

  onSubmit = e => {
    e.preventDefault();
    this.props.submitTask(e.target.value);
  }

  handleDone = (e) => { this.props.toggleTask(e.target.dataset.value); }

  handleClear = () => { this.props.clear(); }


  render() {

    const { location } = this.props;
    const filterParam = new URLSearchParams(location.search).get('filter');
    const filteredList = this.props.previousTasks.filter((task) => {
      if (filterParam === 'completed') {
        return task.isDone === true;
      } if (filterParam === 'uncompleted') {
        return task.isDone === false;
      }
      return true;
    });
    console.log(filteredList, 'filteredList');
    return (
      <Fragment>
        <h1 className="todoTitle">todos</h1>
        <div className="todoClearbutton">
          <ClearButton handleClear={ this.props.clear } />
        </div>
        <div className="todoContainer">
          <Addtodo
            todo={ this.props.currentTaskDescription }
            handleTask={ this.handleTask }
            onSubmit={ this.onSubmit } />
          <TodoPanel
            handleDone={ this.handleDone }
            list={ filteredList }
          />
          <TodoFilters
            onClick={ this.handleFilter }
            numberOfItems={ filteredList.length }
            selectedFilter={ filterParam }
          />
        </div>
        <Link to="/">Home</Link>
      </Fragment >
    );
  }
}


const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clickClear()),
  submitTask: (value) => dispatch(submitTask(value)),
  writeTask: (value) => dispatch(writeTask(value)),
  toggleTask: (value) => dispatch(toggleTask(value))
});

const mapStateToProps = (state) => ({
  currentTaskDescription: state.Todo.currentTaskDescription,
  previousTasks: state.Todo.previousTasks
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);