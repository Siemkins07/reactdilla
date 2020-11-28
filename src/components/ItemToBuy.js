import React from "react";

const ItemToBuy = ({ itemToBuy, onBuyItem }) => {
  return (
    <div>
      <li>
        {itemToBuy.name}
        <button onClick={() => onBuyItem(itemToBuy.canBeBuy)}>{"+"}</button>
        <button>{"++"}</button>
        <button>{">>"}</button>
      </li>
       {" "}
    </div>
  );
};
export default ItemToBuy;
