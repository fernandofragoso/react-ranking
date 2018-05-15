import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact={true} path="/" render={() => (
            <Link to="/another">
              <button className="btn btn-primary">
                Go to another route
              </button>
            </Link>
          )}/>
          <Route path="/another" render={() => (
            <Link to="/">
              <button className="btn btn-primary">Go to index</button>
            </Link>
          )}/>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
