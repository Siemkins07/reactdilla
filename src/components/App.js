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
    dayNumber: 0,
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
  }

  resetLocation = () => {
    const locations = this.state.locations.map(location => location.isActive = false)
    this.setState({locations})
  }

  resetMsgStatus = () => {  
    const messages = this.state.messages.map(message => {
      if (message.isShown === true) {
      message.isShown = false
      } return message
    })
    this.setState({messages})
  }

  handleChangeLocation = id => {
    this.resetLocation();
    this.resetMsgStatus();
    this.handleShowMessage();
    const locations = this.state.locations.map(location => {
      if (id === location.id) {
        location.isActive = !location.isActive
      }
      return location
    })
    this.setState({locations})
    this.setState({dayNumber: this.state.dayNumber + 1})
  }

  //if you want see messages more often change condition to >= 2 or even >1 
  handleShowMessage = () => {
    const randomNumber = Math.floor(Math.random()*1000)
    const moduloResult = randomNumber % 5
    if( moduloResult > 3 ) {
      const randomMsg = Math.floor(Math.random() * this.state.messages.length) + 1
      const messages = this.state.messages.map(message => {
        if (randomMsg === message.id) {
          message.isShown = true
        }
        return message
      })
      this.setState({messages})
      }
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
    else return alert(`don't be pussy`)
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
        name={this.state.playerName}
        duration={this.state.gameDuration}
        day={this.state.dayNumber}
        randomMessage={this.handleShowMessage}
        messages={this.state.messages}
        />}
    
      </div>
    );
  }
}

export default App;
