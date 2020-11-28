import React from "react";

const Location = ({ name, active, id, changeLocation }) => {
  const BtnStyle = { backgroundColor: "#61DBFB" };

  return (
    <button
      style={active ? BtnStyle : {}}
      onClick={() => changeLocation(id)}
      disabled={active}
    >
      {name}
    </button>
  );
};

export default Location;
