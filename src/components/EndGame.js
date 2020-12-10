import React from "react";

const EndGame = (props) => {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "100",
          backgroundColor: "black",
          color: "#fff",
        }}
      >
        <h2 style={{ marginTop: "200px" }}>
          End game: Your score is: {props.money}
        </h2>
      </div>

      {props.gameStarted ? (
        <div>
          <button
            style={{
              border: "2px solid #fff",
              color: "#000",
              zIndex: "100",
              position: "fixed",
            }}
            onClick={() => {
              props.resetGame();
              props.startGame();
            }}
          >
            Start new game
          </button>
          <button>View leaderboards</button>
        </div>
      ) : null}
    </div>
  );
};
export default EndGame;
