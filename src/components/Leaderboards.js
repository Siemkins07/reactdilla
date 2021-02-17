import React from "react";

const Leaderboards = (props) => {
  return ( 
    
      <tr>
        <th style={{color:'#fff'}}  scope="row">{props.nr}</th>
        <td style={{color:'#fff'}} >{props.name}</td>
        <td style={{color:'#fff'}} >{props.score}</td>
        <td style={{color:'#fff'}}>{props.duration}</td>
        <td style={{color:'#fff'}}>{props.level}</td>
      </tr>
  
   );
}
 
export default Leaderboards;