import React from 'react';
const MessageCenter = (props) => {
  const startMessage = `Hello world!, Hello, hello, hello. Yyyy... I mean... I wanted to say hello ${props.name}.
    So do you really think you can become a programmer in ${props.duration}? 
    You must have overdosed on course ads, haha! You'll see for yourself. 
    Choose the first location and get to work. 
    Get to work !!`
  const dayMessage = `Day ${props.day}. Another day has come you will waste. How will you fail today, hmm?`
  const displayMessage = props.messages.filter(m => m.isShown === true)
  console.log(displayMessage);
    
    return ( 
    <div>
      {props.day <= 0 ? <p>{startMessage}</p> : <p>{dayMessage}</p> }
      {props.day > 0 && displayMessage.length > 0 ? <p>{displayMessage[0].copy}</p> : <p>nothing to dispay today</p>}
    </div>
   );
}
 
export default MessageCenter;