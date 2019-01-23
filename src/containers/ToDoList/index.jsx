import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Addtodo from './components/Addtodo';
import TodoPanel from './components/TodoPanel';
import TodoFilters from './components/TodoFilters';
import ClearButton from './components/ClearButton';
import './style.css';
import {
  submitTask, clickClear, writeTask, doTask
} from './actions';
// import PropTypes from 'prop-types';

class TodoList extends Component {


  handleTask = e => { this.props.writeTask(e.target.value); }

  onSubmit = e => {
    e.preventDefault();
    this.props.submitTask(e.target.value);
  }

  handleDone = (e) => { this.props.doTask(e.target.dataset.value); }

  handleClear = () => { this.props.clear(); }


  render() {

    // eslint-disable-next-line react/prop-types
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
        <h1 className="todo_title">todos</h1>
        <div className="todo_clearbutton">
          <ClearButton handleClear={ this.props.clear } />
        </div>
        <div className="todo_container">
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
  doTask: (value) => dispatch(doTask(value))
});

const mapStateToProps = (state) => ({
  currentTaskDescription: state.Todo.currentTaskDescription,
  previousTasks: state.Todo.previousTasks
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);