import React from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import { logout } from "../../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const user = <FontAwesomeIcon icon={faUser} style={{ color: "#9eb85d" }} />;
const mail = <FontAwesomeIcon icon={faEnvelope} style={{ color: "#9eb85d" }} />;

const handleLogout = (props) => {
  logout().then(() => {
    props.setUser(null);
  });
};

const Profile = (props) => {
  return (
    <div className="Profile">
      <img className="Logo" src="../images/logo.svg" alt="Logo" />
      <h1>
        {props.user.username.charAt(0).toUpperCase() +
          props.user.username.slice(1)}
      </h1>
      <span>E-mail:</span>
      <p className="MediumText">jonathan@gmail.com {props.user.email}</p>

      <div>
        <Link
          to="/login"
          onClick={() => handleLogout(props)}
          className="PrimaryButton"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default Profile;
