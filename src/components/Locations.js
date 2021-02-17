import React from "react";
import Location from "./Location";

const Locations = (props) => {
  const locations = props.locations.map((location) => (
    <Location
      key={location.id}
      id={location.id}
      name={location.name}
      active={location.isActive}
      changeLocation={props.changeLocation}
    />
  ));

  return <div>{locations}</div>;
};

export default Locations;
