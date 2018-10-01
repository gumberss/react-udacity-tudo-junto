import React from 'react'
import PropTypes from 'prop-types'

export default class PlayerRegistration extends React.Component {
	
  	static propTypes = {
    	onRegisteredPlayer: PropTypes.func.isRequired,
      	isUniqueNickname: PropTypes.func.isRequired
    }
  
  	state = {
      	id: 1,
    	name: '',
      	lastName: '',
      	nickname: '',
      	numberOfGames: 0
    }
  
	onChangeName = (event) => {
     	var value = event.target.value;
     	this.setState({ name: value });
    }

	onChangeLastName = (event) => {
     	var value = event.target.value;
     	this.setState({ lastName: value });
    }

	onChangeNickName = (event) => {
     	var value = event.target.value;
     	this.setState({ nickname: value });
    }

	onSubmitPlayer = event => {
      	event.preventDefault();
      	this.props.onRegisteredPlayer(this.state);
      	this.setState(beforeState => ({ 
         	id: ++beforeState.id,
          	name: '',
          	lastName: '',
          	nickname: ''
        }));
    }

  	render() {
      	var { isUniqueNickname } = this.props;
		var { name, lastName, nickname } = this.state

    	return (
          	<form onSubmit={this.onSubmitPlayer}>
          		<label htmlFor="user-name__input">Nome</label>
          		<input type="text" id="user-name__input" value={name} onChange={this.onChangeName}/> 
          
          		<label htmlFor="user-last-name__input">Sobrenome</label>
          		<input type="text" id="user-last-name__input" value={lastName} onChange={this.onChangeLastName}/> 
          
          		<label htmlFor="nick-name__input">Nickname</label>
          		<input type="text" id="nick-name__input" value={nickname} onChange={this.onChangeNickName}/> 

				<button disabled={ !name || !lastName || !nickname || !isUniqueNickname(nickname)}>Add</button>
				{!isUniqueNickname(nickname) && (
                  <p style={{
                  	color:'red'
                  }}>Já existe um jogador com esse nickname</p>
                )}
          	</form>
        )
    }
}