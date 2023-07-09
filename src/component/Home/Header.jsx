import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-bar">
      {/* logo icon */}
      <div className="nav-icon">
        <img src={Logo} alt="" />
      </div>
      {/* rectangular */}
      <p></p>
      <div className={open ? "nav-link-mobile" : "nav-link"}>
        <NavLink to="/">00 Home</NavLink>
        <NavLink to="/destination">01 Destination</NavLink>
        <NavLink to="/crew">02 Crew</NavLink>
        <NavLink to="/technology">03 Technology</NavLink>
      </div>
      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </nav>
  );
};

export default Header;
