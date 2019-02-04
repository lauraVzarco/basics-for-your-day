/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TaskModel } from './models/todo';
import InputTodo from './components/InputTodo';
import TodoListPanel from './components/TodoListPanel';
import FilterPanel from './components/FilterPanel';
import ClearButton from './components/ClearButton';
import ConfirmationModal from './components/ConfirmationModal';
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
    history: PropTypes.object,
    location: PropTypes.object,
    listOfTasks: PropTypes.object,
    inputTask: PropTypes.string
  }

  state = {
    task: '',
    id: 0,
    modalIsOpen: false,
    exitIsNeeded: false
  }

  handleTask = e => { this.setState({ task: e.target.value }); }

  onSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-plusplus
    // eslint-disable-next-line react/no-direct-mutation-state
    this.props.submitTask(new TaskModel({ description: this.state.task, id: ++this.state.id }));
    this.setState({ task: '' });
  }

  handleDone = (e) => { this.props.toggleTask(e.target.dataset.value); }

  handleClear = () => { this.props.clear(); this.setState({ id: 0 }); }

  handleModal = () => { this.setState({ modalIsOpen: !this.state.modalIsOpen }); }

  goToHome = () => {
    this.props.history.push('/');
  }

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
      <div onKeyDown={ this.closeModalWithEsc }>
        <h1 className="todoTitle">todos</h1>
        <div className="todoClearbutton">
          <ConfirmationModal message="delete all your todos?" onAccept={ this.handleClear }>
            <ClearButton />
          </ConfirmationModal>
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
            numberOfItems={ filteredList.size }
            selectedFilter={ filterParam }
          />
        </div>
        {this.props.listOfTasks.size >= 1
          ? <ConfirmationModal message="exit??" onAccept={ this.goToHome }>
            <button>  Home  </button>
          </ConfirmationModal>
          : <button> Home </button>
        }
        <div>

        </div>

      </div >
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