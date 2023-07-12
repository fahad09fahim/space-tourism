import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";
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
        <Link type="button" to="/">
          00 Home
        </Link>
        <Link type="button" to="/destination">
          01 Destination
        </Link>
        <Link type="button" to="/crew">
          02 Crew
        </Link>
        <Link type="button" to="/technology">
          03 Technology
        </Link>
      </div>
      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </nav>
  );
};

export default Header;
