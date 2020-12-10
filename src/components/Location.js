import React from "react";

const Location = (props) => {
  const BtnStyle = { backgroundColor: "#61DBFB" };

  return (
    <button
      style={props.active ? BtnStyle : {}}
      onClick={() => props.changeLocation(props.id)}
      disabled={props.active}
    >
      {props.name}
    </button>
  );
};

export default Location;