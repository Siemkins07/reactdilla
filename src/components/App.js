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
    money: 200,
    numbersOfItmesToBuyId: [],
    gameEnd: false,
    debt: 100,
    bank: 0,
    debtRepayment: 0,
    locations: [
      { id: 1, name: "Google", isActive: false },
      { id: 2, name: "Amazon", isActive: false },
      { id: 3, name: "Code Two", isActive: false },
      { id: 4, name: "Facebook", isActive: false },
      { id: 5, name: "Codewise", isActive: false },
      { id: 6, name: "Techland", isActive: false },
    ],
    items: [
      { id: 1, name: "JSX", amount: 0, canBeSold: false, cost: 0 },
      { id: 2, name: "Function", amount: 0, canBeSold: false, cost: 0 },
      { id: 3, name: "Render", amount: 0, canBeSold: false, cost: 0 },
      { id: 4, name: "State", amount: 0, canBeSold: false, cost: 0 },
      { id: 5, name: "This", amount: 0, canBeSold: false, cost: 0 },
      { id: 6, name: "Component", amount: 0, canBeSold: false, cost: 0 },
      { id: 7, name: "Props", amount: 0, canBeSold: false, cost: 0 },
      { id: 8, name: "Lifecycle", amount: 0, canBeSold: false, cost: 0 },
      { id: 9, name: "Hooks", amount: 0, canBeSold: false, cost: 0 },
      { id: 10, name: "Redux", amount: 0, canBeSold: false, cost: 0 },
    ],

    itemsToBuy: [
      { id: 1, name: "JSX", amount: 0, canBeBuy: false, cost: 10 },
      { id: 2, name: "Function", amount: 0, canBeBuy: false, cost: 15 },
      { id: 3, name: "Render", amount: 0, canBeBuy: false, cost: 18 },
      { id: 4, name: "State", amount: 0, canBeBuy: false, cost: 20 },
      { id: 5, name: "This", amount: 0, canBeBuy: false, cost: 25 },
      { id: 6, name: "Component", amount: 0, canBeBuy: false, cost: 30 },
      { id: 7, name: "Props", amount: 0, canBeBuy: false, cost: 35 },
      { id: 8, name: "Lifecycle", amount: 0, canBeBuy: false, cost: 45 },
      { id: 9, name: "Hooks", amount: 0, canBeBuy: false, cost: 45 },
      { id: 10, name: "Redux", amount: 0, canBeBuy: false, cost: 80 },
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
    this.handleTransferAmount();
    this.handleCanBeBuyItemsId();
    this.handleSwitchCanBeSold();
    this.handleChangeItemToBuyCost();
    this.handleSetCostToItems();
    this.handleChangeDebt();
    this.handleHealthChange();
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
  }; // SELL ITEMS

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
  // BUY ITEMS
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
  };

  //OPERATION ON ITEMS TO BUY AND ITEMS TO SELL
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
        if (item.id === randomNumber) {
          item.canBeBuy = true;
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
    const defaultCost = [10, 15, 18, 20, 25, 30, 35, 45, 45, 80];
    const mappedName = itemsToBuy.map((item) => item.name);

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

  handleCancelBuy = (itemToBuy) => {
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
  //FINANCIAL OPERATIONS
  handleChangeDebt = () => {
    if (this.state.debt > 0) {
      this.setState({
        debt: Math.round(this.state.debt + this.state.debt * 0.05),
      });
    }
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

  handleChangeLoan = (e) => {
    e.preventDefault();
    this.setState({ bank: parseInt(e.target.value, 10) });
  };

  handleGetBorrow = () => {
    const { debt, money, bank } = this.state;
    const input = document.querySelector(".loan");
    if (debt + bank <= money && debt <= money / 2 && input.value !== 0) {
      this.setState({
        debt: this.state.debt + this.state.bank,
        money: this.state.money + this.state.bank,
        bank: 0,
      });
    } else alert("you are insolvent");
  };

  handleGetBorrowMax = () => {
    const { money, debt } = this.state;
    // const input = document.querySelector('.loan');
    const maxBorrowValue = Math.floor(money - debt);
    if (debt / money <= 1 / 2) {
      this.setState({ bank: maxBorrowValue });
    } else {
      this.setState({ bank: 0 });
      alert("First earn more money or repayment some debt");
    }
  };

  //START AND END GAME + HEALTH
  setPlayerName = (e) => {
    // e.preventDefault()
    this.setState({ playerName: e.target.value });
  };

  handleGameDuration = (e) => {
    this.setState({ gameDuration: e.target.value });
  };

  handleResetGameAndState = () => {
    const data = {
      gameStarted: false,
      playerName: "",
      gameDuration: "",
      dayNumber: 0,
      health: 100,
      isAlive: true,
      money: 200,
      numbersOfItmesToBuyId: [],
      gameEnd: false,
      debt: 100,
      bank: 0,
      debtRepayment: 0,
      locations: [
        { id: 1, name: "Google", isActive: false },
        { id: 2, name: "Amazon", isActive: false },
        { id: 3, name: "Code Two", isActive: false },
        { id: 4, name: "Facebook", isActive: false },
        { id: 5, name: "Codewise", isActive: false },
        { id: 6, name: "Techland", isActive: false },
      ],
      items: [
        { id: 1, name: "JSX", amount: 0, canBeSold: false, cost: 0 },
        { id: 2, name: "Function", amount: 0, canBeSold: false, cost: 0 },
        { id: 3, name: "Render", amount: 0, canBeSold: false, cost: 0 },
        { id: 4, name: "State", amount: 0, canBeSold: false, cost: 0 },
        { id: 5, name: "This", amount: 0, canBeSold: false, cost: 0 },
        { id: 6, name: "Component", amount: 0, canBeSold: false, cost: 0 },
        { id: 7, name: "Props", amount: 0, canBeSold: false, cost: 0 },
        { id: 8, name: "Lifecycle", amount: 0, canBeSold: false, cost: 0 },
        { id: 9, name: "Hooks", amount: 0, canBeSold: false, cost: 0 },
        { id: 10, name: "Redux", amount: 0, canBeSold: false, cost: 0 },
      ],

      itemsToBuy: [
        { id: 1, name: "JSX", amount: 0, canBeBuy: false, cost: 10 },
        { id: 2, name: "Function", amount: 0, canBeBuy: false, cost: 15 },
        { id: 3, name: "Render", amount: 0, canBeBuy: false, cost: 18 },
        { id: 4, name: "State", amount: 0, canBeBuy: false, cost: 20 },
        { id: 5, name: "This", amount: 0, canBeBuy: false, cost: 25 },
        { id: 6, name: "Component", amount: 0, canBeBuy: false, cost: 30 },
        { id: 7, name: "Props", amount: 0, canBeBuy: false, cost: 35 },
        { id: 8, name: "Lifecycle", amount: 0, canBeBuy: false, cost: 45 },
        { id: 9, name: "Hooks", amount: 0, canBeBuy: false, cost: 45 },
        { id: 10, name: "Redux", amount: 0, canBeBuy: false, cost: 80 },
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
    this.setState({ ...data });
  };

  handleStartGame = () => {
    if (this.state.playerName.length >= 3 && this.state.gameDuration) {
      this.setState({ gameStarted: !this.state.gameStarted, gameEnd: false });
    } else return alert(`don't be pussy`);
  };

  handleEndGame = () => {
    // this.setState({playerName: '', gameDuration: ''})
    const days = this.state.dayNumber;
    if (this.state.gameDuration === "1 MO" && this.state.dayNumber === 30) {
      this.setState({ gameEnd: true });
      return alert("end game");
    } else if (this.state.gameDuration === "3 MOS" && days === 90) {
      this.setState({ gameEnd: true });
      return alert("end game");
    } else if (this.state.gameDuration === "6 MOS" && days === 180) {
      this.setState({ gameEnd: true });
      return alert("end game");
    } else if (this.state.gameDuration === "12 MOS" && days === 365) {
      this.setState({ gameEnd: true });
      return alert("end game");
    }
  };

  handleHealthChange = () => {
    if (this.state.health > 5 && this.state.debt > 100) {
      this.setState({ health: this.state.health - 2 });
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

    if (
      this.state.health < 100 &&
      this.state.money > 0 &&
      this.state.debt < 100
    ) {
      this.setState({ health: this.state.health + 1 });
    }
  };

  handleRestoreHealth = () => {
    const { health, money } = this.state;
    const restorePoints = 100 - health;

    switch (true) {
      case restorePoints > 0 &&
        restorePoints <= 15 &&
        money >= restorePoints * 3:
        this.setState({ money: money - restorePoints * 3, health: 100 });
        break;
      case restorePoints > 15 &&
        restorePoints <= 30 &&
        money >= restorePoints * 4:
        this.setState({ money: money - restorePoints * 4, health: 100 });
        break;
      case restorePoints > 31 &&
        restorePoints <= 50 &&
        money >= restorePoints * 5:
        this.setState({ money: money - restorePoints * 5, health: 100 });
        break;
      case restorePoints > 50 && money >= restorePoints * 10:
        this.setState({ money: money - restorePoints * 10, health: 100 });
        break;
      default:
        // eslint-disable-next-line no-unused-expressions
        restorePoints > 0 && restorePoints <= 15
          ? alert(`cost of treatment ${restorePoints * 3}`)
          : null || (restorePoints > 15 && restorePoints <= 30)
          ? alert(`cost of treatment ${restorePoints * 4}`)
          : null || (restorePoints > 31 && restorePoints <= 50)
          ? alert(`cost of treatment ${restorePoints * 5}`)
          : null || restorePoints > 50
          ? alert(`cost of treatment ${restorePoints * 10}`)
          : null;
    }
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
            debt: {this.state.debt}       {" "}
            <input
              list="tickmarks"
              title={this.state.debtRepayment}
              type="range"
              min="0"
              max={this.state.debt}
              onChange={this.handleSetDebtRepayment}
            />
                   {" "}
            <datalist id="tickmarks">
                        <option value={0}>0%</option>         {" "}
              <option value={Math.floor((this.state.debt * 1) / 10)}></option> 
                     {" "}
              <option value={Math.floor((this.state.debt * 2) / 10)}></option> 
                     {" "}
              <option value={Math.floor((this.state.debt * 3) / 10)}></option> 
                     {" "}
              <option value={Math.floor((this.state.debt * 4) / 10)}></option> 
                     {" "}
              <option value={Math.floor((this.state.debt * 5) / 10)}>
                50%
              </option>
                       {" "}
              <option value={Math.floor((this.state.debt * 6) / 10)}></option> 
                     {" "}
              <option value={Math.floor((this.state.debt * 7) / 10)}></option> 
                     {" "}
              <option value={Math.floor((this.state.debt * 8) / 10)}></option> 
                     {" "}
              <option value={Math.floor((this.state.debt * 9) / 10)}></option> 
                      <option value={Math.floor(this.state.debt)}>100%</option> 
                   {" "}
            </datalist>
                    <button onClick={this.handleDebtRepayment}>Go!</button>     
             {" "}
          </h3>
        )}
               {" "}
        {this.state.gameStarted && (
          <div>
                     
            <label htmlFor="loan">
              {" "}
              Get loan:          
              <input
                name="loan"
                className="loan"
                type="number"
                min="0"
                title="loan"
                value={this.state.bank !== 0 ? this.state.bank : ""}
                onChange={this.handleChangeLoan}
              />
            </label>
                     <button onClick={this.handleGetBorrow}>Borrow</button>     
               <button onClick={this.handleGetBorrowMax}>MAX</button>
                     <br />         
            <button onClick={this.handleRestoreHealth}>Visit Hospital</button>  
                     
          </div>
        )}
                <br />               {" "}
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
          <EndGame
            money={this.state.money}
            level={this.state.level}
            gameStarted={this.state.gameStarted}
            startGame={this.handleStartGame}
            resetGame={this.handleResetGameAndState}
          />
        )}
                         {" "}
      </div>
    );
  }
}

export default App;
