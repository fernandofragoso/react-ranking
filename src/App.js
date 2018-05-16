import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {
      clickButton,
      newValue
    } = this.props;

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
          <p>
            <h2>{newValue}</h2>
            <button className="btn btn-danger" onClick={() => clickButton('updated')}>
              Update State
            </button>
          </p>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
