import React from "react";

const NewGame = ({
  playerName,
  setPlayerName,
  gameDuration,
  selectDurationGame,
  startGame,
  isStarted,
}) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form>
         {" "}
      <label>
        Input your name:      {" "}
        <input
          type="text"
          value={isStarted ? playerName : null}
          onChange={setPlayerName}
        />
           {" "}
      </label>
          <br />   {" "}
      <label>
        Selet game duration:  {" "}
        <select
          value={isStarted ? gameDuration : null}
          onChange={selectDurationGame}
        >
              <option value="select one">-</option>   {" "}
          <option value="1 MO">1 mc</option>   {" "}
          <option value="3 MOS">3 mc</option>   {" "}
          <option value="6 MOS">6 mc</option>   {" "}
          <option value="12 MOS">12 mc</option> {" "}
        </select>
           {" "}
      </label>
          <button onClick={startGame}>Accept</button> {" "}
    </form>
  );
};
export default NewGame;
