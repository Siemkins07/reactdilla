import React from "react";

const EndGame = (props) => {
  return (
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
           {" "}
      <h2 style={{ marginTop: "200px" }}>
        End game: Your score is: {props.money}
      </h2>
         {" "}
    </div>
  );
};
export default EndGame;
