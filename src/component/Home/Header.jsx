import React from "react";
import "./Header.css";
import Logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="nav-bar">
      {/* logo icon */}
      <div>
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
    </nav>
  );
};

export default Header;
