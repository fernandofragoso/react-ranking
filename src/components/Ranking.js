import React, { Component } from 'react';
import './Ranking.css';

class Ranking extends Component {

  render() {
    return (
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="Ranking__column-position"></th>
            <th scope="col">Nome</th>
            <th scope="col" className="Ranking__column-points text-center">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {this.props.players.map((player, index) => {
            return (
              <tr key={player._id}>
                <th scope="row" className="text-center">{index+1}</th>
                <td>
                  <img alt="avatar" className="Ranking__avatar-image rounded-circle" src="player.png" />
                  {player.name}
                </td>
                <td className="text-center">{player.points}</td>
              </tr>
            )
          })}
        </tbody>
      </table>  
    );
  }
}

export default Ranking;