import React from "react";

const NewGame = ({
  playerName,
  setPlayerName,
  gameDuration,
  selectDurationGame,
  startGame,
  resetGame,
}) => {
  // const handleSubmitForm = e => {
  //   e.preventDefault();
  //   console.log('form was sent')
  // }

  return (
    <form>
      <input
        type="text"
        placeholder="Your name"
        value={playerName}
        onChange={setPlayerName}
      />
      <br />
      <select value={gameDuration} onChange={selectDurationGame}>
        <option defaultValue value="select one">
          Game duration
        </option>
        <option value="1 MO">1 mc</option>
        <option value="3 MOS">3 mc</option>
        <option value="6 MOS">6 mc</option>
        <option value="12 MOS">12 mc</option>
      </select>
      <br />
      <button onClick={startGame}>Accept</button>
    </form>
  );
};

export default NewGame;