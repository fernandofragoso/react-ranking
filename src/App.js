import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import RankingSection from './components/RankingSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <AppHeader />
          <RankingSection />
        </div>
      </div>
    );
  }
}

export default App;
