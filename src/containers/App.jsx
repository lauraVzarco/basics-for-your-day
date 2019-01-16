import React, { Component, Fragment } from 'react';
import './App.css';
import Calculator from './Calculator';
import ToDoList from './ToDoList'
import { Route, Switch, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Fragment>
        <main className="Main">
          <Switch>
            <Route exact path='/'>
              <div>
                <div>Hi! what do you want?</div>
                <ul>
                  <li><Link to='/calculator'>Calculator!</Link></li>
                  <li><Link to='/todolist'>To Do List!</Link></li>
                </ul>
              </div>
            </Route>
            < Route exact path='/calculator' component={Calculator} />
            < Route exact path='/todolist' component={ToDoList} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
