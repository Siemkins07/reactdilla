import React from "react";

const YourSingleItem = (props) => {
  return (
    <div>
      <li>
        {props.item.name}
        <button>{props.item.amount}</button>
        <button onClick={() => props.sellOneItem(props.item)}>{"-"} </button>
        <button onClick={() => props.sellTenItems(props.item)}>{"--"} </button>
        <button onClick={() => props.sellMaxItems(props.item)}>{">>"} </button>
        {/* <button style={{marginLeft: '30px'}}>info cost 4dev: {props.item.cost}</button> */}
      </li>
    </div>
  );
};

export default YourSingleItem;
