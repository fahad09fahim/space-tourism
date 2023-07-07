import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <h3> So, you want to travel to Space</h3>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience! Explore
        </p>
      </div>
      <div>
        <Link to="/destination">
          <button className="explore-btn">
            <span>EXPLORE</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
