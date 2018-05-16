import React, { Component } from 'react';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <header className="AppHeader">
        <h2 className="AppHeader__title">CAT</h2>
        <div className="btn-group" role="group" aria-label="Menu">
          <button type="button" className="btn btn-dark">Torneios</button>
          <button type="button" className="btn btn-dark">Ranking</button>
          <button type="button" className="btn btn-dark">Login</button>
        </div>
      </header>
    );
  }
}

export default AppHeader;