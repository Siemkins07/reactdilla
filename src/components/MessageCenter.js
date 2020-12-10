import React from "react";
const MessageCenter = (props) => {
  const startMessage = (
    <p>
      Hello world!, Hello, hello, hello. Yyyy... I mean... I wanted to say hello{" "}
      <strong>{props.name}</strong>.So do you really think you can become a
      programmer in <strong>{props.duration}</strong>? You must have overdosed
      on course ads, haha! You'll see for yourself. Choose the first location
      and get to work. Get to work !!
    </p>
  );
  const dayMessage = `Day ${props.day}. Another day has come you will waste. How will you fail today, hmm?`;
  const displayMessage = props.messages.filter((m) => m.isShown === true);

  return (
    <div style={{ padding: "0 50px" }}>
      {props.day === 0 ? startMessage : <p>{dayMessage}</p>}
      {props.day > 0 && displayMessage.length > 0 ? (
        <p>{displayMessage[0].copy}</p>
      ) : (
        <p>nothing to dispay today</p>
      )}
    </div>
  );
};

export default MessageCenter;