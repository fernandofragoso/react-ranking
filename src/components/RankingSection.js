import React, { Component } from 'react';
import './RankingSection.css';
import Ranking from './Ranking';

class RankingSection extends Component {

  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentWillMount() {
    this._fetchRanking();
  }

  render() {
    return (
      <div className="RankingSection row">
        <div className="col-md-8">
          <Ranking players={this.state.players} />
        </div>
        <div className="col-md-4">
          Coluna 2
        </div>
      </div>
    );
  }

  _fetchRanking() {
    fetch("http://tenisranking.herokuapp.com/api/players", {
      method: 'GET'
    }).then(res => res.json())
    .then(response => {
      this._setPlayers(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  _setPlayers(players) {
    //Sort by points and filter players without points
    let sortedPlayers = players.sort((a, b) => {
      return (b.points - a.points);
    }).filter(player => player.points > 0);

    this.setState({
      players: sortedPlayers
    });
  }
}

export default RankingSection;