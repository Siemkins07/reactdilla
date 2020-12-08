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
    <div style={{ textAlign: "left" }}>
            <h3>Your items</h3>     {" "}
      <ul style={{ listStyle: "none" }}>        {myFilteredItems}      </ul>   {" "}
    </div>
  );
};
export default YourAllItems;
