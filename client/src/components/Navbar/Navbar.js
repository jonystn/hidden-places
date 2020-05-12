import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <nav className=''>
      <div className='Active Icon'>
        <img src='../images/navbar/globe.svg' alt='' />
        <span>Explore</span>
      </div>
      <div>
        <img src='../images/navbar/camera.svg' className='Icon' alt='' />
        <span>Spot a place</span>
      </div>
      <div>
        <img src='../images/navbar/heart.svg' className='Icon' alt='' />
        <span>Favorites</span>
      </div>
      <div>
        <img src='../images/navbar/profile.svg' className='Icon' alt='' />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;
