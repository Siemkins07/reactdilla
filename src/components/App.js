import "../App.css";
import React, { Component } from "react";
import NewGame from "./NewGame";
import Locations from "./Locations";
import MessageCenter from "./MessageCenter";
import YourAllItems from "./YourAllItems";
import ItemsToBuy from "./ItemsToBuy";

class App extends Component {
  state = {
    gameStarted: false,
    playerName: "",
    gameDuration: "",
    dayNumber: 0,
    health: 100,
    isAlive: true,
    money: 100,
    numbersOfItmesToBuyId: [],
    locations: [
      { id: 1, name: "loca_1", isActive: false },
      { id: 2, name: "loca_2", isActive: false },
      { id: 3, name: "loca_3", isActive: false },
      { id: 4, name: "loca_4", isActive: false },
      { id: 5, name: "loca_5", isActive: false },
      { id: 6, name: "loca_6", isActive: false },
    ],
    items: [
      { id: 1, name: "item_1", amount: 0, canBeBuy: true, cost: 1 },
      { id: 2, name: "item_2", amount: 0, canBeBuy: false, cost: 2 },
      { id: 3, name: "item_3", amount: 0, canBeSold: false, cost: 3 },
      { id: 4, name: "item_4", amount: 0, canBeSold: false, cost: 4 },
      { id: 5, name: "item_5", amount: 0, canBeSold: false, cost: 5 },
      { id: 6, name: "item_6", amount: 0, canBeSold: false, cost: 6 },
      { id: 7, name: "item_7", amount: 0, canBeSold: false, cost: 7 },
      { id: 8, name: "item_8", amount: 0, canBeSold: false, cost: 8 },
      { id: 9, name: "item_9", amount: 0, canBeSold: false, cost: 9 },
      { id: 10, name: "item_10", amount: 0, canBeSold: false, cost: 105 },
    ],
    itemsToBuy: [
      { id: 1, name: "item_1", canBeBuy: true, cost: 1 },
      { id: 2, name: "item_2", canBeBuy: false, cost: 2 },
      { id: 3, name: "item_3", canBeBuy: false, cost: 3 },
      { id: 4, name: "item_4", canBeBuy: false, cost: 4 },
      { id: 5, name: "item_5", canBeBuy: false, cost: 5 },
      { id: 6, name: "item_6", canBeBuy: false, cost: 6 },
      { id: 7, name: "item_7", canBeBuy: false, cost: 7 },
      { id: 8, name: "item_8", canBeBuy: false, cost: 8 },
      { id: 9, name: "item_9", canBeBuy: false, cost: 9 },
      { id: 10, name: "item_10", canBeBuy: false, cost: 105 },
      { id: 11, name: "item_11", canBeBuy: true, cost: 1 },
      { id: 12, name: "item_12", canBeBuy: false, cost: 2 },
      { id: 13, name: "item_13", canBeBuy: false, cost: 3 },
      { id: 14, name: "item_14", canBeBuy: false, cost: 4 },
      { id: 15, name: "item_15", canBeBuy: false, cost: 5 },
      { id: 16, name: "item_16", canBeBuy: false, cost: 6 },
      { id: 17, name: "item_17", canBeBuy: false, cost: 7 },
      { id: 18, name: "item_18", canBeBuy: false, cost: 8 },
      { id: 19, name: "item_19", canBeBuy: false, cost: 9 },
      { id: 20, name: "item_20", canBeBuy: false, cost: 105 },
    ],
    messages: [
      { id: 1, copy: "message_1", isShown: false },
      { id: 2, copy: "message_2", isShown: false },
      { id: 3, copy: "message_3", isShown: false },
      { id: 4, copy: "message_4", isShown: false },
      { id: 5, copy: "message_5", isShown: false },
    ],
    level: [
      "intern",
      "junior",
      "regular",
      "senior",
      "lead",
      "architect",
      "master",
    ],
    members: [],
  };

  componentDidMount() {}
  //RESET FUNCTIONS
  resetLocation = () => {
    const locations = this.state.locations.map((location) => {
      if (location.isActive === true) {
        location.isActive = false;
      }
      return location;
    });
    this.setState({ locations });
  };

  resetMsgStatus = () => {
    const messages = this.state.messages.map((message) => {
      if (message.isShown === true) {
        message.isShown = false;
      }
      return message;
    });
    this.setState({ messages });
  };

  resetItemsToBuy = () => {
    this.setState({ numbersOfItmesToBuyId: [] });
  };

  resetCanBeBuy = () => {
    const itemsToBuy = this.state.itemsToBuy.map((item) => {
      if (item.canBeBuy === true) {
        item.canBeBuy = false;
      }
      return item;
    });
    this.setState({ itemsToBuy });
  };

  handleChangeLocation = (id) => {
    this.resetLocation();
    this.resetMsgStatus();
    this.handleShowMessage();
    const locations = this.state.locations.map((location) => {
      if (id === location.id) {
        location.isActive = !location.isActive;
      }
      return location;
    });
    this.setState({ locations, dayNumber: this.state.dayNumber + 1 });
  };

  handleAmountChange = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].amount++;
    this.setState({ items });
  };

  handleIncreaseAmountBy1 = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (this.state.money >= item.cost) {
      items[index].amount++;
      this.setState({ items, money: this.state.money - item.cost });
    } else {
      alert("you have not enough money");
    }
  };

  handleIncreaseAmountBy10 = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (this.state.money >= item.cost * 10) {
      items[index].amount += 10;
      this.setState({ items, money: this.state.money - item.cost * 10 });
    } else {
      alert("you have not enough money");
    }
  };

  handleIncreaseAmountToMax = (item) => {
    const max = Math.floor(this.state.money / item.cost);
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (max >= 1) {
      items[index].amount += max;
      this.setState({ items, money: this.state.money - max });
    } else {
      alert("you have not enough money");
    }
  };

  //if you want see messages more often change condition to >= 3
  handleShowMessage = () => {
    this.resetMsgStatus();
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if (randomNumber > 4) {
      const randomMsg =
        Math.floor(Math.random() * this.state.messages.length) + 1;
      const messages = this.state.messages.map((message) => {
        if (randomMsg === message.id) {
          message.isShown = true;
        }
        return message;
      });
      this.setState({ messages });
    }
  };

  handleCanBeBuyItemsId = () => {
    this.resetItemsToBuy();
    this.resetCanBeBuy();
    const numberOfItems = this.state.itemsToBuy.length;
    const displayItemsNumber = Math.floor(Math.random() * 10 + 1);
    const numbersOfItmesToBuyId = [...this.state.numbersOfItmesToBuyId];
    const itemsToBuy = [...this.state.itemsToBuy];

    for (let idNumber = 0; idNumber < displayItemsNumber; idNumber++) {
      let randomNumber = Math.floor(Math.random() * numberOfItems + 1);
      numbersOfItmesToBuyId.push(randomNumber);
      itemsToBuy.map((item) => {
        if (item.id == randomNumber) {
          item.canBeBuy = true;
        }
        return item;
      });
    }
    this.setState({ numbersOfItmesToBuyId, itemsToBuy });
  };

  handleGameDuration = (e) => {
    this.setState({ gameDuration: e.target.value });
  };

  setPlayerName = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  };

  handleStartGame = () => {
    if (this.state.playerName.length >= 3 && this.state.gameDuration) {
      this.setState({ gameStarted: !this.state.gameStarted });
    } else return alert(`don't be pussy`);
  };

  render() {
    const {
      locations,
      messages,
      items,
      itemsToBuy,
      gameStarted,
      money,
      playerName,
      gameDuration,
      dayNumber,
    } = this.state;

    return (
      <div className="App">
        <h1>reactdilla</h1>
        {gameStarted && <h3>money: {money}</h3>}
        {!gameStarted && (
          <NewGame
            playerName={playerName}
            gameDuration={gameDuration}
            isStarted={gameStarted}
            selectDurationGame={this.handleGameDuration}
            setPlayerName={this.setPlayerName}
            startGame={this.handleStartGame}
          />
        )}

        {gameStarted && (
          <Locations
            locations={locations}
            changeLocation={this.handleChangeLocation}
          />
        )}

        {gameStarted && (
          <MessageCenter
            messages={messages}
            name={playerName}
            duration={gameDuration}
            day={dayNumber}
            randomMessage={this.handleShowMessage}
          />
        )}

        {gameStarted && (
          <YourAllItems
            items={items}
            addOneItem={this.handleIncreaseAmountBy1}
            addTenItems={this.handleIncreaseAmountBy10}
            addMaxItems={this.handleIncreaseAmountToMax}
          />
        )}

        {gameStarted && (
          <ItemsToBuy
            itemsToBuy={itemsToBuy}
            onBuyItem={this.handleCanBeBuyItemsId}
          />
        )}
      </div>
    );
  }
}

export default App;
