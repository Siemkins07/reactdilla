import React from "react";
import Location from "./Location";

const Locations = ({ locations, changeLocation }) => {
  locations = locations.map(({ id, name, isActive }) => (
    <Location
      key={id}
      id={id}
      name={name}
      active={isActive}
      changeLocation={changeLocation}
    />
  ));

  return <div>{locations}</div>;
};

export default Locations;
