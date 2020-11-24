import React from 'react';
import YourSingleItem from "./YourSingleItem";


const YourAllItems = (props) => {
  const items = props.items.map(item => <YourSingleItem
  key={item.id}
  item={item}
  addOneItem={props.addOneItem}
  addTenItems={props.addTenItems}
  addMaxItems={props.addMaxItems}

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