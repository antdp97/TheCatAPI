import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a className="nav-brand" href="https://thecatapi.com/">
        <img src="https://api.thecatapi.com/favicon.ico" alt="TheCatApi" />
        TheCatApi
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/favorites"
            activeStyle={activeStyle}
          >
            Favorites
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/breed" activeStyle={activeStyle}>
            Breeds
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
