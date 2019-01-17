import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Addtodo from './components/Addtodo';
import TodoPanel from './components/TodoPanel';
import TodoFilters from './components/TodoFilters';
import ClearButton from './components/ClearButton';
// import PropTypes from 'prop-types';

class TodoList extends Component {
    state = {
        currentTask: '',
        previousTasks: [],
    }

    componentDidMount() {
        const previousTasks = JSON.parse(window.localStorage.getItem('data'));
        if (previousTasks) {
            this.setState({
                previousTasks
            })
        }
    }

    handleTask = (e) => {
        this.setState({
            currentTask: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const previousTasks = this.state.previousTasks.concat(this.state.currentTask);
        this.setState({
            currentTask: '',
            previousTasks
        }, () => { console.log('submit', this.state.currentTask, this.state.previousTasks) })
        window.localStorage.setItem('data', JSON.stringify(previousTasks))
    }

    handleClear = () => {
        this.setState({
            currentTask: '',
            previousTasks: []
        })
        localStorage.removeItem('data')
    }

    render() {
        return (
            <Fragment>
                <div>Todos</div>
                <div>
                    <ClearButton handleClear={this.handleClear} />
                    <Addtodo
                        todo={this.state.currentTask}
                        handleTask={this.handleTask}
                        onSubmit={this.onSubmit} />
                    <TodoPanel
                        todo={this.state.currentTask}
                        previousTasks={this.state.previousTasks} />
                    <TodoFilters />
                </div>
                <Link to='/'>Home</Link>
            </Fragment>
        );
    }
}

export default TodoList