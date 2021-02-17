import React from "react";
import YourSingleItem from "./YourSingleItem";

const YourAllItems = (props) => {
  const myFilteredItems = props.items
    .filter((item) => item.amount > 0)
    .map((item) => (
      <YourSingleItem
        key={item.id}
        item={item}
        sellOneItem={props.sellOneItem}
        sellTenItems={props.sellTenItems}
        sellMaxItems={props.sellMaxItems}
      />
    ));
  return (
    <div style={{ flexBasis: "49%" }}>
      <h3>
        Your items {props.sumAmounts}/{props.capacity}
      </h3>

      <ul style={{ listStyle: "none", paddingLeft: "0" }}>{myFilteredItems}</ul>
    </div>
  );
};

export default YourAllItems;
