import React from 'react'

const ItemToBuy = (props) => {
  return ( 
    <div>
      <li>
        {props.itemToBuy.name}
        <button onClick={() => props.onBuyItem(props.itemToBuy.canBeBuy)}>{"+"}</button>
        <button >{"++"}</button>
        <button >{">>"}</button>
      </li>
  </div> );
}
   
 
export default ItemToBuy;
