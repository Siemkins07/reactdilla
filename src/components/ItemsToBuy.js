import React from "react";
import ItemToBuy from "./ItemToBuy";

const ItemsToBuy = ({ itemsToBuy, onBuyItem }) => {
  const filteredItems = [...itemsToBuy]
    .filter((item) => item.canBeBuy === true)
    .map((itemToBuy) => (
      <ItemToBuy
        key={itemToBuy.id}
        itemToBuy={itemToBuy}
        onBuyItem={onBuyItem}
      />
    ));

  return (
    <div style={{ textAlign: "left" }}>
            <h3>Items to buy</h3>
      <ul style={{ listStyle: "none" }}>      {filteredItems}</ul>   {" "}
    </div>
  );
};
export default ItemsToBuy;
