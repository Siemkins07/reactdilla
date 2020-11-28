import React from "react";
import YourSingleItem from "./YourSingleItem";

const YourAllItems = (items, addOneItem, addTenItems, addMaxItems) => {
  items = items.map((item) => (
    <YourSingleItem
      key={item.id}
      item={item}
      addOneItem={addOneItem}
      addTenItems={addTenItems}
      addMaxItems={addMaxItems}
    />
  ));
  return (
    <div style={{ textAlign: "left" }}>
      <h3>Your all items</h3>
      <ul style={{ listStyle: "none" }}>{items}</ul>
    </div>
  );
};

export default YourAllItems;
