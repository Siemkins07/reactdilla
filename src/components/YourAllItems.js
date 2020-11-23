import React from 'react';
import PossessionItem from "./YourSingleItem";


const YourAllItems = (props) => {
  const items = props.items.map(item => <PossessionItem
  key={item.id}
  item={item}
  addOneItem={props.addOneItem}

  />)
  return ( 
    <div style={{textAlign:'left'}}>
      <h3>Posiadane przedmioty</h3>
      <ul style={{listStyle: 'none', }}>
        {items}
      </ul>
    </div>
   );
}
 
export default YourAllItems;