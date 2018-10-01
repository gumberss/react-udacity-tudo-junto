import React from 'react'
import PropTypes from 'prop-types'
import './Style.css'

export default class PlayerList extends React.Component {
  
  static propTypes = {
      players: PropTypes.array.isRequired
  }

  	state = {
    	hideGames: false
  	}
  
	onHideShowGamesCount = () => {
    	this.setState(beforeState => ({
         	hideGames: !beforeState.hideGames
        }))  
    }

  render(){
  	var { players } = this.props;
	var { hideGames } = this.state;
  
 	return (
   		<div>
      		<ol>
      			{ players.map(player => (
              			<li key={player.id}>{`${player.nickname} played ${hideGames ? '*' : player.numberOfGames} games.`}</li> 
              	))}
      		</ol>
			<button className="litle-button" onClick={this.onHideShowGamesCount}>{!hideGames ? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}</button>
   		</div>
 	)
  }
}


