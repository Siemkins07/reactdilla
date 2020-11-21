import '../App.css';
import React, { Component } from 'react';
import NewGame from './NewGame';
import Locations from './Locations';
import MessageCenter from './MessageCenter'


class App extends Component {
  
  state = {
    gameStarted: false,
    playerName: '',
    gameDuration: '',
    dayNumber: '',
    health: 100,
    isAlive: true,
    locations: [
      {id: 1, name:'loca_1', isActive: false}, 
      {id: 2, name:'loca_2', isActive: false},
      {id: 3, name:'loca_3', isActive: false},
      {id: 4, name:'loca_4', isActive: false},
      {id: 5, name:'loca_5', isActive: false},
      {id: 6, name:'loca_6', isActive: false},
    ],
    items: [
      {id: 1, name: 'item_1', isOwn: true},
      {id: 2, name: 'item_2', isOwn: false},
      {id: 3, name: 'item_3', isOwn: false},
      {id: 4, name: 'item_4', isOwn: false},
      {id: 5, name: 'item_5', isOwn: false},
      {id: 6, name: 'item_6', isOwn: false},
      {id: 7, name: 'item_7', isOwn: false},
      {id: 8, name: 'item_8', isOwn: false},
      {id: 9, name: 'item_9', isOwn: false},
      {id: 10, name: 'item_10', isOwn: false},
    ],
    messages: [
      {id: 1, copy: 'message_1', isShown: false},
      {id: 2, copy: 'message_2', isShown: false},
      {id: 3, copy: 'message_3', isShown: false},
      {id: 4, copy: 'message_4', isShown: false},
      {id: 5, copy: 'message_5', isShown: false},
    ],
    level: ['intern', 'junior', 'regular', 'senior', 'lead', 'architect', 'master'],
    members: []

  }
  componentDidMount() {
    console.log('mount App');
    console.log(this.state.gameStarted);
  }

  resetLocation = () => {
    const locations = this.state.locations.map(location => location.isActive = false)
    this.setState({locations})

  }

handleChangeLocation = (id) => {
  this.resetLocation()
  console.log(id);
  const locations = this.state.locations.map(location => {
    if (id === location.id) {
      location.isActive = !location.isActive
    }
    return location
  })
  this.setState({locations})
}


handleGameDuration = e => {
this.setState({gameDuration: e.target.value})
}

setPlayerName = e => {
  e.preventDefault()
  this.setState({playerName: e.target.value})
}

handleStartGame = () => {
  if (this.state.playerName.length >= 3 && this.state.gameDuration) {
    // alert(`Your name is now ${this.state.playerName} and you pick a game for ${this.state.gameDuration} `)
    this.setState({
      gameStarted: !this.state.gameStarted
    })
    }
    else return alert('nie badź leń')
}

  render() {

    const {locations} = this.state
    return (
      <div className="App">
        <h1>reactdilla</h1>
        {!this.state.gameStarted && <NewGame 
          playerName={this.state.playerName}
          gameDuration={this.state.gameDuration}
          selectDurationGame={this.handleGameDuration}
          setPlayerName={this.setPlayerName}
          isStarted={this.state.gameStarted}
          startGame={this.handleStartGame}
        />}

        {this.state.gameStarted && <Locations  
        locations={locations}
        changeLocation={this.handleChangeLocation}
        />}
        {this.state.gameStarted && <MessageCenter
        />}
    
      </div>
    );
  }
}

export default App;

