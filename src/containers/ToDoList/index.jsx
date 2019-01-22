import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Addtodo from './components/Addtodo';
import TodoPanel from './components/TodoPanel';
import TodoFilters from './components/TodoFilters';
import ClearButton from './components/ClearButton';
import './style.css';
// import PropTypes from 'prop-types';

class TodoList extends Component {
  state = {
    currentTaskDescription: '',
    previousTasks: [],
  }

  componentDidMount() {
    const previousTasks = JSON.parse(window.localStorage.getItem('data'));
    // eslint-disable-next-line react/prop-types
    console.log(this.props.location);
    if (previousTasks) {
      this.setState({
        previousTasks
      });
    }
  }

  handleTask = (e) => {
    this.setState({
      currentTaskDescription: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const task = {
      description: this.state.currentTaskDescription,
      isDone: false,
    };
    this.setState(prevState => ({
      currentTaskDescription: '',
      previousTasks: prevState.previousTasks.concat(task)
    }), () => { window.localStorage.setItem('data', JSON.stringify(this.state.previousTasks)); });

  }

  handleDone = (e) => {
    const clickedTaskDescription = e.target.dataset.value;
    // encontrar el index de la tarea seleccionada
    // eslint-disable-next-line max-len
    const selectedTaskIndex = this.state.previousTasks.findIndex(task => task.description === clickedTaskDescription);
    // Copiar el array de previous task y el objeto del task seleccionado
    const newPreviousTasks = [...this.state.previousTasks];
    const newSelectedTask = { ...this.state.previousTasks[selectedTaskIndex] };
    // cambiar el objeto, meterlo en el nuevo array
    newSelectedTask.isDone = !newSelectedTask.isDone;
    newPreviousTasks[selectedTaskIndex] = newSelectedTask;
    // cambiar el estado al array nuevo
    this.setState({
      previousTasks: newPreviousTasks
    }, () => window.localStorage.setItem('data', JSON.stringify(this.state.previousTasks)));

  }

  handleClear = () => {
    this.setState({
      currentTaskDescription: '',
      previousTasks: []
    });
    localStorage.removeItem('data');
  }

  render() {

    // eslint-disable-next-line react/prop-types
    const { location } = this.props;
    const filterParam = new URLSearchParams(location.search).get('filter');
    console.log(location.search, 'holi');
    console.log('filterparam', filterParam);
    const filteredList = this.state.previousTasks.filter((task) => {
      if (filterParam === 'completed') {
        return task.isDone === true;
      } if (filterParam === 'uncompleted') {
        return task.isDone === false;
      }
      return true;

    });

    return (
      <Fragment>
        <h1 className="todo_title">todos</h1>
        <div className="todo_clearbutton">
          <ClearButton handleClear={ this.handleClear } />
        </div>
        <div className="todo_container">
          <Addtodo
            todo={ this.state.currentTaskDescription }
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


// const mapDispatchToProps = dispatch => ({
//   clear: () => dispatch(clickClear()),
//   equal: () => dispatch(clickEqual()),
//   number: (value) => dispatch(clickNumber(value)),
//   operator: (value) => dispatch(clickOperator(value))
// });

// const mapStateToProps = (state) => ({

// });

// connect(mapStateToProps, mapDispatchToProps)

export default (TodoList);