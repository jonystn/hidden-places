import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faMapMarkedAlt,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const globe = (
  <FontAwesomeIcon icon={faGlobeAmericas} size="2x" color="#d1d1cc" />
);
const spot = (
  <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" color="#d1d1cc" />
);
const heart = <FontAwesomeIcon icon={faHeart} size="2x" color="#d1d1cc" />;
const user = <FontAwesomeIcon icon={faUser} size="2x" color="#d1d1cc" />;

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <NavLink
        exact
        to="/explore"
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        <i>{globe}</i>
        <span>Explore</span>
      </NavLink>
      <NavLink
        exact
        to="/spot-a-place"
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        <i>{spot}</i>
        <span>Spot a place</span>
      </NavLink>
      <NavLink
        exact
        to="/favorites"
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        <i>{heart}</i>
        <span>Favorites</span>
      </NavLink>
      <NavLink
        exact
        to="/profile"
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        <i>{user}</i>
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
