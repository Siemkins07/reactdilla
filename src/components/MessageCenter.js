import React from "react";
const MessageCenter = ({ day, messages, name, duration }) => {
  const startMessage = `Hello world!, Hello, hello, hello. Yyyy...  I mean... I wanted to say      hello ${name}.
    So do you really think you can become a programmer in ${duration}? 
    You must have overdosed on course ads, haha! You'll see for yourself. 
    Choose the first location and get to work. 
    Get to work !!`;
  const dayMessage = `Day ${day}. Another day has come you will waste. How will you fail today, hmm?`;
  const displayMessage = messages.filter((m) => m.isShown === true);

  return (
    <div>
      {day <= 0 ? <p>{startMessage}</p> : <p>{dayMessage}</p>}
      {day > 0 && displayMessage.length > 0 ? (
        <p>{displayMessage[0].copy}</p>
      ) : (
        <p>nothing to dispay today</p>
      )}
    </div>
  );
};

export default MessageCenter;
