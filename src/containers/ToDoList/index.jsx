import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TaskModel } from './models/todo';
import InputTodo from './components/InputTodo';
import TodoListPanel from './components/TodoListPanel';
import FilterPanel from './components/FilterPanel';
import ClearButton from './components/ClearButton';
import './style.css';
import {
  submitTask, pressClear, toggleTask
} from './actions';

class TodoList extends Component {
  static propTypes = {
    writeTask: PropTypes.func,
    submitTask: PropTypes.func,
    toggleTask: PropTypes.func,
    clear: PropTypes.func,
    location: PropTypes.object,
    listOfTasks: PropTypes.array,
    inputTask: PropTypes.string
  }

  state = {
    task: ''
  }

  handleTask = e => { this.setState({ task: e.target.value }); }

  onSubmit = e => {
    e.preventDefault();
    this.props.submitTask(new TaskModel({ description: this.state.task }));
    this.setState({ task: '', index: 0 });
  }

  handleDone = (e) => { this.props.toggleTask(e.target.dataset.value); }

  handleClear = () => { this.props.clear(); }


  render() {

    const { location } = this.props;
    const filterParam = new URLSearchParams(location.search).get('filter');
    const filteredList = this.props.listOfTasks.filter((task) => {
      if (filterParam === 'completed') {
        return task.isDone === true;
      } if (filterParam === 'uncompleted') {
        return task.isDone === false;
      }
      return true;
    });

    return (
      <Fragment>
        <h1 className="todoTitle">todos</h1>
        <div className="todoClearbutton">
          <ClearButton handleClear={ this.props.clear } />
        </div>
        <div className="todoContainer">
          <InputTodo
            todo={ this.state.task }
            handleTask={ this.handleTask }
            onSubmit={ this.onSubmit } />
          <TodoListPanel
            handleDone={ this.handleDone }
            list={ filteredList }
          />
          <FilterPanel
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
  clear: () => dispatch(pressClear()),
  submitTask: (value) => dispatch(submitTask(value)),
  toggleTask: (value) => dispatch(toggleTask(value))
});

const mapStateToProps = (state) => ({
  inputTask: state.Todo.inputTask,
  listOfTasks: state.Todo.listOfTasks
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);