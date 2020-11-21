import React from 'react';




const Location = (props) => {

const BtnStyle = {backgroundColor: 'orange'}

  return ( 
    <button
    style={props.active ? BtnStyle : {}}
    onClick={() => props.changeLocation(props.id)}>
        {props.name}

    </button>
   );
}
 
export default Location;