import React, { useState } from "react";
import { NavLink} from "react-router-dom";

function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <NavLink className="navbar-brand" to="/about">
          Micah Duehring
        </NavLink>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarResponsive"
        >
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/resume"
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
