import React from "react";

const ItemToBuy = (props) => {
  return (
    <div>
      <li>
        {props.itemToBuy.name}
        <button onClick={() => props.buyOne(props.itemToBuy)}>{"+"}</button>
        <button onClick={() => props.buyTen(props.itemToBuy)}>{"++"}</button>
        <button onClick={() => props.buyAll(props.itemToBuy)}>{">>"}</button>
        <button onClick={() => props.subtractOne(props.itemToBuy)}>
          {"-"}
        </button>
        <button>{props.itemToBuy.amount}</button>
        <button onClick={() => props.cancelBuy(props.itemToBuy)}>X</button>
        <button style={{ marginLeft: "30px" }}>
          COST: {props.itemToBuy.cost}
        </button>
      </li>
       {" "}
    </div>
  );
};
export default ItemToBuy;