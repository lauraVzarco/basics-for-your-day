import React, { Component, Fragment } from 'react';
import './App.css';
import Calculator from './Calculator';
import TodoList from './TodoList'
import { Route, Switch, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Fragment>
        <main className="Main">
          <Switch>
            <Route exact path='/'>
              <div className="app_container">
                <h1 className="app_title">
                  Hi! This is Basics for your day.
                </h1 >
                <h2 className="app_subtitle">
                  What do you want?
                </h2>
                <ul className="app_list">
                  <li><Link to='/calculator'>Calculator!</Link></li>
                  <li><Link to='/todolist'>To do List!</Link></li>
                </ul>
              </div>
            </Route>
            < Route exact path='/calculator' component={Calculator} />
            < Route exact path='/todolist' component={TodoList} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
