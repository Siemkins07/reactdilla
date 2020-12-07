import React from "react";

const ItemToBuy = (props) => {
  return (
    <div>
           {" "}
      <li>
                {props.itemToBuy.name}       {" "}
        <button
          onClick={() => props.buyOne(props.itemToBuy)} // onClick={() => props.transfer()}
        >
          {"+"}
        </button>
               {" "}
        <button
          onClick={() => props.buyTen(props.itemToBuy)} // onClick={() => props.transfer()}
        >
          {"++"}
        </button>
               {" "}
        <button
          onClick={() => props.buyAll(props.itemToBuy)} // onClick={() => props.transfer()}
        >
          {">>"}
        </button>
                <button>{props.itemToBuy.amount}</button>       {" "}
        <button onClick={() => props.cancelBuy(props.itemToBuy)}>X</button>     
         {" "}
        <button style={{ marginLeft: "30px" }}>
          info cost 4dev: {props.itemToBuy.cost}
        </button>
             {" "}
      </li>
       {" "}
    </div>
  );
};
export default ItemToBuy;
