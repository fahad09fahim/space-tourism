import React, { useState } from "react";
import "./Destination.css";
import { useLoaderData } from "react-router-dom";

const Destination = () => {
  const data = useLoaderData();
  const [value, setValue] = useState(0);
  const { name, travel, distance, images, description } = data[value];
  return (
    <div>
      <div className="header-text">
        <h3>01 Pick your destination</h3>
        <div></div>
      </div>
      <div className="destination-container">
        <div>
          <img src={images} alt="" />
        </div>
        <div className="info">
          {data.map((i, index) => (
            <h2
              className="planet-btn"
              key={index}
              onClick={() => setValue(index)}
            >
              {i.name}
            </h2>
          ))}
          <h1>{name}</h1>
          <p className="planet-description">{description}</p>
          <div className="third-info">
            <p className="travel-dis-info">
              <span>AVG. DISTANCE:</span>
              {travel}
            </p>
            <p className="travel-dis-info">
              <span>Est. travel time:</span>
              {distance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
