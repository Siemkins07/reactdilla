import React from "react";
import ItemToBuy from "./ItemToBuy";

const ItemsToBuy = (props) => {
  const filteredItems = [...props.itemsToBuy]
    .filter((item) => item.canBeBuy === true)
    .map((itemToBuy) => (
      <ItemToBuy
        key={itemToBuy.id}
        itemToBuy={itemToBuy}
        buyOne={props.buyOne}
        buyTen={props.buyTen}
        buyAll={props.buyAll}
        transfer={props.transfer}
        cancelBuy={props.cancelBuy}
      />
    ));
  return (
    <div style={{ textAlign: "left" }}>
             <h3>Items to buy</h3>       {" "}
      <ul style={{ listStyle: "none" }}>        {filteredItems}        </ul>   {" "}
    </div>
  );
};
export default ItemsToBuy;
