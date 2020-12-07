import React from "react";

const YourSingleItem = (props) => {
  return (
    <li>
      {props.item.name}
      <button>{props.item.amount}</button>
      <button onClick={() => props.addOneItem(props.item)}>{"+"} </button>
      <button onClick={() => props.addTenItems(props.item)}>{"++"} </button>
      <button onClick={() => props.addMaxItems(props.item)}>{">>"} </button>
      <button style={{ marginLeft: "30px" }}>
        info cost 4dev: {props.item.cost}
      </button>
    </li>
  );
};

export default YourSingleItem;
