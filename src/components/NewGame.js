import React from "react";

const NewGame = ({
  playerName,
  setPlayerName,
  gameDuration,
  selectDurationGame,
  startGame,
}) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <label>
        Input your name:
        <input type="text" value={playerName} onChange={setPlayerName} />
      </label>
      <br />
      <label>
        Selet game duration:
        <select value={gameDuration} onChange={selectDurationGame}>
          <option value="select one">-</option>
          <option value="1 month">1 mc</option>
          <option value="3 month">3 mc</option>
          <option value="6 month">6 mc</option>
          <option value="12 month">12 mc</option>
        </select>
      </label>
      <button onSubmit={handleSubmitForm} onClick={startGame}>
        Accept
      </button>
    </form>
  );
};

export default NewGame;
