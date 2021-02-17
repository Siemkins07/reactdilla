import React from "react";
import classes from './NewGame.module.css'

const NewGame = ({
  playerName,
  setPlayerName,
  gameDuration,
  selectDurationGame,
  startGame
}) => {

const handleSubmitForm = e => {
    e.preventDefault();
    startGame();
  }

  return (
    <div className={classes.NewGame}>
    <form onSubmit={handleSubmitForm}>
      <input className={classes.Input}
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={setPlayerName}
      />
      <br />
      <select className={classes.Input} value={gameDuration} onChange={selectDurationGame}>
        <option defaultValue value="select one">
          Select duration
        </option>
        <option value="1 MO">1 mc</option>
        <option value="3 MOS">3 mc</option>
        <option value="6 MOS">6 mc</option>
        <option value="12 MOS">12 mc</option>
      </select>
      <br />
      <button className={classes.Button} type="submit">Accept</button>
    </form>
    </div>
  );
};

export default NewGame;
