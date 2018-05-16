import React, { Component } from 'react';
import './RankingSection.css';

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
        <table className="table table-sm table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col" className="RankingSection__column-position"></th>
              <th scope="col">Nome</th>
              <th scope="col" className="RankingSection__column-points text-center">Pontos</th>
            </tr>
          </thead>
          <tbody>
            {this.state.players.map((player, index) => {
              return (
                <tr key={player._id}>
                  <th scope="row" className="text-center">{index+1}</th>
                  <td>{player.name}</td>
                  <td className="text-center">{player.points}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
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