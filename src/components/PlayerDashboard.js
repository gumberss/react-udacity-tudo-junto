import React from 'react'
import PlayerRegistration from './PlayerRegistration'
import PlayerList from './PlayerList'


export default class PlayerDashboard extends React.Component {
 	  
	state = {
      players: []
    }

	onRegisteredPlayer = player => {
		this.setState((beforeState) => ({
          	players: [...beforeState.players, player]
        }));
	}

	isUniqueNickname = nickname => {
      	return !this.state.players.some(x => x.nickname === nickname);
    }

  	render() {
    	return (
      		<div>
             	<PlayerRegistration onRegisteredPlayer={this.onRegisteredPlayer} isUniqueNickname={this.isUniqueNickname}/>
            	<PlayerList players = {this.state.players}/>
            </div>
       	)
  	}
}