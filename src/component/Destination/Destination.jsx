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
          <img className="planet-image" src={images} alt="" />
        </div>
        <div>
          <div className="planet-nav">
            {data.map((i, index) => (
              <h2
                className="planet-btn"
                id={`${index === value && "planet-btn-border"}`}
                key={index}
                onClick={() => setValue(index)}
              >
                {i.name}
              </h2>
            ))}
          </div>
          <div className="planet-info">
            <h1 className="planet-name">{name}</h1>
            <p className="planet-description">{description}</p>
          </div>
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
