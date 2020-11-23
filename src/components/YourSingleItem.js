import React from 'react';


 const YourSingleItem = (props) => {;
   return ( 
     <div>
      <li>
        {props.item.name} 
        <button
          onClick={() => props.addOneItem(props.item)}
        >  
        {props.item.amount}
        </button>
      </li>
      </div>
    );
 }
  
 export default YourSingleItem;