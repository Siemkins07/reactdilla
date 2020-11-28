import React from "react";

const YourSingleItem = ({ item, addOneItem, addTenItems, addMaxItems }) => {
  return (
    <div>
      <li>
        {item.name}
        <button>{item.amount}</button>
        <button onClick={() => addOneItem(item)}>{"+"} </button>
        <button onClick={() => addTenItems(item)}>{"++"} </button>
        <button onClick={() => addMaxItems(item)}>{">>"} </button>
        <button style={{ marginLeft: "30px" }}>
          info cost 4dev: {item.cost}
        </button>
      </li>
    </div>
  );
};

export default YourSingleItem;
