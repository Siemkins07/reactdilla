import "../App.css";
import React, { Component } from "react";
import NewGame from "./NewGame";
import Locations from "./Locations";
import MessageCenter from "./MessageCenter";
import YourAllItems from "./YourAllItems";
import ItemsToBuy from "./ItemsToBuy";
import EndGame from "./EndGame";

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
    gameEnd: false,
    debt: 100,
    debtRepayment: 0,
    locations: [
      { id: 1, name: "loca_1", isActive: false },
      { id: 2, name: "loca_2", isActive: false },
      { id: 3, name: "loca_3", isActive: false },
      { id: 4, name: "loca_4", isActive: false },
      { id: 5, name: "loca_5", isActive: false },
      { id: 6, name: "loca_6", isActive: false },
    ],
    items: [
      { id: 1, name: "item_1", amount: 0, canBeSold: false, cost: 0 },
      { id: 2, name: "item_2", amount: 0, canBeSold: false, cost: 0 },
      { id: 3, name: "item_3", amount: 0, canBeSold: false, cost: 0 },
      { id: 4, name: "item_4", amount: 0, canBeSold: false, cost: 0 },
      { id: 5, name: "item_5", amount: 0, canBeSold: false, cost: 0 },
      { id: 6, name: "item_6", amount: 0, canBeSold: false, cost: 0 },
      { id: 7, name: "item_7", amount: 0, canBeSold: false, cost: 0 },
      { id: 8, name: "item_8", amount: 0, canBeSold: false, cost: 0 },
      { id: 9, name: "item_9", amount: 0, canBeSold: false, cost: 0 },
      { id: 10, name: "item_10", amount: 0, canBeSold: false, cost: 0 },
    ],

    itemsToBuy: [
      { id: 1, name: "item_1", amount: 0, canBeBuy: false, cost: 1 },
      { id: 2, name: "item_2", amount: 0, canBeBuy: false, cost: 2 },
      { id: 3, name: "item_3", amount: 0, canBeBuy: false, cost: 3 },
      { id: 4, name: "item_4", amount: 0, canBeBuy: false, cost: 4 },
      { id: 5, name: "item_5", amount: 0, canBeBuy: false, cost: 5 },
      { id: 6, name: "item_6", amount: 0, canBeBuy: false, cost: 6 },
      { id: 7, name: "item_7", amount: 0, canBeBuy: false, cost: 7 },
      { id: 8, name: "item_8", amount: 0, canBeBuy: false, cost: 8 },
      { id: 9, name: "item_9", amount: 0, canBeBuy: false, cost: 9 },
      { id: 10, name: "item_10", amount: 0, canBeBuy: false, cost: 10 },
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

  componentDidMount() {} //RESET FUNCTIONS

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

  resetCanBeSold = () => {
    const items = this.state.items.map((item) => {
      if (item.canBeSold === true) {
        item.canBeSold = false;
      }
      return item;
    });
    this.setState({ items });
  };

  resetAmount = () => {
    const itemsToBuy = this.state.itemsToBuy.map((item) => (item.amount = 0));
    this.setState({ itemsToBuy });
  };

  handleNewDay = () => {
    this.handleEndGame();
    this.resetLocation();
    this.resetMsgStatus();
    this.handleShowMessage();
    this.handleCanBeBuyItemsId();
    this.handleSwitchCanBeSold();
    this.handleTransferAmount();
    this.handleChangeItemToBuyCost();
    this.handleSetCostToItems();
    this.handleChangeDebt();
    this.handleHealthChange();
  };

  handleChangeDebt = () => {
    if (this.state.debt > 0) {
      this.setState({
        debt: this.state.debt + parseInt(`${this.state.debt * 0.05}`),
      });
    }
  };

  handleChangeLocation = (id) => {
    this.handleNewDay();
    const locations = this.state.locations.map((location) => {
      if (id === location.id) {
        location.isActive = !location.isActive;
      }
      return location;
    });
    this.setState({
      locations,
      dayNumber: this.state.dayNumber + 1,
      money: this.state.money - 5,
    });
  };

  handleDecreaseAmountBy1 = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (item.canBeSold === false) return alert("you can't sell this item now");
    else if (item.amount > 0) {
      items[index].amount--;
      this.setState({ items, money: this.state.money + item.cost });
    } else {
      alert("you can't sell more than you have");
    }
  };

  handleIncreaseAmountBy1BUY = (itemToBuy) => {
    const itemsToBuy = [...this.state.itemsToBuy]; // const items = [...this.state.items]
    const index = itemsToBuy.indexOf(itemToBuy);
    itemsToBuy[index] = { ...itemToBuy };
    if (this.state.money >= itemToBuy.cost) {
      itemsToBuy[index].amount++;
      this.setState({ itemsToBuy, money: this.state.money - itemToBuy.cost });
    } else {
      alert("you have not enough money BB");
    }
  };

  handleDecreaseAmountBy10 = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (item.canBeSold && item.amount >= 10) {
      items[index].amount -= 10;
      this.setState({ items, money: this.state.money + item.cost * 10 });
    } else {
      alert("you can't sell more than you have");
    }
  };

  handleIncreaseAmountBy10BUY = (itemToBuy) => {
    const itemsToBuy = [...this.state.itemsToBuy];
    const index = itemsToBuy.indexOf(itemToBuy);
    itemsToBuy[index] = { ...itemToBuy };
    if (this.state.money >= itemToBuy.cost * 10) {
      itemsToBuy[index].amount += 10;
      this.setState({
        itemsToBuy,
        money: this.state.money - itemToBuy.cost * 10,
      });
    } else {
      alert("you have not enough money BB");
    }
  };
  handleDecreaseAmountToZero = (item) => {
    const max = Math.floor(item.amount * item.cost);
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (item.canBeSold && item.amount > 0) {
      items[index].amount -= item.amount;
      this.setState({ items, money: this.state.money + max });
    } else {
      alert("you can't sell this item now");
    }
  };

  handleIncreaseAmountToMaxBUY = (itemToBuy) => {
    const max = Math.floor(this.state.money / itemToBuy.cost);
    const itemsToBuy = [...this.state.itemsToBuy];
    const index = itemsToBuy.indexOf(itemToBuy);
    itemsToBuy[index] = { ...itemToBuy };
    if (this.state.money >= max * itemToBuy.cost && max > 0) {
      itemsToBuy[index].amount += max;
      this.setState({
        itemsToBuy,
        money: this.state.money - max * itemToBuy.cost,
      });
    } else {
      alert("you have not enough money BB");
    }
  }; //if you want see messages more often change condition to >= 3

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
          item.canBeBuy = true; // item.cost += 3
        }
        return item;
      });
    }
    this.setState({ numbersOfItmesToBuyId, itemsToBuy });
  };

  //switch canBeSold if canBeBuy is true

  handleSwitchCanBeSold = () => {
    this.resetCanBeSold();
    const itemsToBuy = [...this.state.itemsToBuy];
    const items = [...this.state.items];
    const filteredItemsToBuy = itemsToBuy.filter(
      (item) => item.canBeBuy === true
    );
    const onlyNames = filteredItemsToBuy.map((item) => item.name);

    items.map((item) => {
      for (let i = 0; i < onlyNames.length; i++) {
        if (item.name === onlyNames[i]) {
          item.canBeSold = true;
        }
      }
      return item;
    });
    this.setState({ items });
  };

  //transfer amount itemsToBuy to items amount
  handleTransferAmount = () => {
    const itemsToBuy = [...this.state.itemsToBuy];
    const items = [...this.state.items];
    const filteredItemsToBuyAmount = itemsToBuy.filter(
      (item) => item.amount > 0
    );
    const onlyNames = filteredItemsToBuyAmount.map((item) => item.name);

    items.map((item) => {
      for (let i = 0; i < onlyNames.length; i++) {
        if (item.name === onlyNames[i]) {
          item.amount += filteredItemsToBuyAmount[i].amount;
        }
      }
      return item;
    });
    this.setState({ items });

    itemsToBuy.map((item) => {
      for (let i = 0; i < onlyNames.length; i++) {
        if (item.name === onlyNames[i]) {
          item.amount -= filteredItemsToBuyAmount[i].amount;
        }
      }
      return item;
    });
    this.setState({ itemsToBuy });
  };

  // set items cost from itemsToBuy cost
  handleSetCostToItems = () => {
    const itemsToBuy = [...this.state.itemsToBuy];
    const items = [...this.state.items];
    const mappedCost = itemsToBuy.map((item) => item.cost);
    const mappedName = itemsToBuy.map((item) => item.name);

    items.map((item) => {
      for (let i = 0; i < mappedCost.length; i++) {
        if (item.name === mappedName[i]) {
          item.cost = mappedCost[i];
        }
      }
      return item;
    });
    this.setState({ items });
  };

  handleChangeItemToBuyCost = () => {
    const itemsToBuy = [...this.state.itemsToBuy];
    const defaultCost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const mappedName = itemsToBuy.map((item) => item.name);
    // const mappedCost = itemsToBuy.map(item => item.cost)

    itemsToBuy.map((item) => {
      for (let i = 0; i < itemsToBuy.length; i++) {
        if (item.name === mappedName[i]) {
          item.cost = defaultCost[i];
          const upOrDown = Math.floor(Math.random() * 2 + 1);
          if (upOrDown === 2) {
            const changerCost = Math.floor(Math.random() * defaultCost[i]);
            item.cost += changerCost;
          } else {
            const changerCost = Math.floor(
              (Math.random() * defaultCost[i]) / 2
            );
            item.cost -= changerCost;
          }
        }
      }
      return item;
    });
    this.setState({ itemsToBuy });
  };

  handleGameDuration = (e) => {
    this.setState({ gameDuration: e.target.value });
  };

  handleEndGame = () => {
    console.log("kikk");
    const days = this.state.dayNumber;
    if (this.state.gameDuration === "1 MO" && this.state.dayNumber == 30) {
      this.setState({ gameEnd: true });
      return alert("end game");
    } else if (
      this.state.gameDuration === "3 MOS" &&
      this.state.dayNumber == 90
    ) {
      this.setState({ gameEnd: true });
      return alert("end game");
    } else if (
      this.state.gameDuration === "6 MOS" &&
      this.state.dayNumber == 180
    ) {
      this.setState({ gameEnd: true });
      return alert("end game");
    } else if (
      this.state.gameDuration === "12 MOS" &&
      this.state.dayNumber == 365
    ) {
      this.setState({ gameEnd: true });
      return alert("end game");
    }
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

  handleSetDebtRepayment = (e) => {
    this.setState({ debtRepayment: e.target.value });
  };

  handleDebtRepayment = (e) => {
    if (this.state.debtRepayment > 0 && this.state.debt > 0) {
      this.setState({
        debt: this.state.debt - this.state.debtRepayment,
        money: this.state.money - this.state.debtRepayment,
      });
    }
  };

  handleHealthChange = () => {
    console.log(this.state.health, "zrowie");
    if (this.state.health > 5 && this.state.debt > 0) {
      this.setState({ health: this.state.health - 5 });
    } else if (this.state.health <= 5 && this.state.debt > 0) {
      this.setState({ health: 0, debt: this.state.debt, gameEnd: true });
      alert("you're done with debt");
    }
    if (this.state.health > 10 && this.state.money < 0) {
      this.setState({ health: this.state.health - 10 });
    } else if (this.state.health <= 10 && this.state.money < 0) {
      this.setState({ health: 0, debt: this.state.debt, gameEnd: true });
      alert("you're done with no money");
    }
  };

  handleCancelBuy = (itemToBuy) => {
    console.log("click");
    const itemsToBuy = [...this.state.itemsToBuy];
    const index = itemsToBuy.indexOf(itemToBuy);
    itemsToBuy[index] = { ...itemToBuy };
    if (itemToBuy.canBeBuy && itemToBuy.amount > 0) {
      itemsToBuy[index].amount = 0;
    }
    this.setState({
      itemsToBuy,
      money: this.state.money + itemToBuy.cost * itemToBuy.amount,
    });
  };
  render() {
    const { locations } = this.state;
    return (
      <div className="App">
                <h1>reactdilla</h1>       {" "}
        {this.state.gameStarted && <h3>money: {this.state.money}</h3>}       {" "}
        {this.state.gameStarted && <h3>health: {this.state.health}</h3>}       {" "}
        {this.state.gameStarted && this.state.debt > 0 && (
          <h3>
            debt: {this.state.debt}
                   {" "}
            <input
              title={this.state.debtRepayment}
              type="range"
              min="0"
              max={this.state.debt}
              onChange={this.handleSetDebtRepayment}
            />
                    <button onClick={this.handleDebtRepayment}>Go!</button>     
             {" "}
          </h3>
        )}
                       {" "}
        {!this.state.gameStarted && (
          <NewGame
            playerName={this.state.playerName}
            gameDuration={this.state.gameDuration}
            selectDurationGame={this.handleGameDuration}
            setPlayerName={this.setPlayerName}
            isStarted={this.state.gameStarted}
            startGame={this.handleStartGame}
          />
        )}
               {" "}
        {this.state.gameStarted && (
          <Locations
            locations={locations}
            changeLocation={this.handleChangeLocation}
          />
        )}
               {" "}
        {this.state.gameStarted && (
          <MessageCenter
            name={this.state.playerName}
            duration={this.state.gameDuration}
            day={this.state.dayNumber}
            randomMessage={this.handleShowMessage}
            messages={this.state.messages}
          />
        )}
               {" "}
        {this.state.gameStarted && (
          <YourAllItems
            items={this.state.items}
            sellOneItem={this.handleDecreaseAmountBy1}
            sellTenItems={this.handleDecreaseAmountBy10}
            sellMaxItems={this.handleDecreaseAmountToZero}
          />
        )}
               {" "}
        {this.state.gameStarted && (
          <ItemsToBuy
            itemsToBuy={this.state.itemsToBuy}
            buyOne={this.handleIncreaseAmountBy1BUY}
            buyTen={this.handleIncreaseAmountBy10BUY}
            buyAll={this.handleIncreaseAmountToMaxBUY}
            cancelBuy={this.handleCancelBuy} // transfer={this.handleTransferAmount}
          />
        )}
               
        {this.state.gameEnd && (
          <EndGame money={this.state.money} level={this.state.level} />
        )}
                         {" "}
      </div>
    );
  }
}

export default App;
