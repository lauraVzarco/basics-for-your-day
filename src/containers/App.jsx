import React, { Component, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Calculator from './Calculator';
import TodoList from './TodoList';

class App extends Component {

  render() {

    return (
      <Fragment>
        <main className="main">
          <Switch>
            <Route exact={ true } path="/">
              <div className="appContainer">
                <h1 className="appTitle"> Hi! This is Basics for your day. </h1 >
                <h2 className="appSubtitle"> What do you want? </h2>
                <ul className="appList">
                  <li className="appElement">
                    <Link to="/calculator"
                      className="appElement">Calculator!</Link>
                  </li>
                  <li className="appElement">
                    <Link to="/todolist"
                      className="appElement">To do List!</Link>
                  </li>
                </ul>
              </div>
            </Route>
            < Route exact={ true } path="/calculator" component={ Calculator } />
            < Route exact={ true } path="/todolist" component={ TodoList } />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
