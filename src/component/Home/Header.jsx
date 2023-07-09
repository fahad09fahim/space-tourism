import React from "react";
import "./Header.css";
import Logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import { BeakerIcon } from "@heroicons/react/24/solid";
const Header = () => {
  return (
    <nav className="nav-bar">
      {/* logo icon */}
      <div className="nav-icon">
        <img src={Logo} alt="" />
      </div>
      {/* rectangular */}
      <p></p>
      <div className="nav-link">
        <NavLink to="/">00 Home</NavLink>
        <NavLink to="/destination">01 Destination</NavLink>
        <NavLink to="/crew">02 Crew</NavLink>
        <NavLink to="/technology">03 Technology</NavLink>
      </div>
      <div className="toggle-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Header;
