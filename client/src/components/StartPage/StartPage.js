import React from "react";
import "./StartPage.scss";
import { Link, Redirect } from "react-router-dom";

const StartPage = (props) => {
  if (props.user) return <Redirect to="/explore" />;
  return (
    <div className="StartPage">
      <img className="Logo" src="../images/logo.svg" alt="Logo" />
      <h1>Welcome to Hidden Places!</h1>
      <p className="MediumText">
        There are many cool places hidden around the world which are not famous
        sightseeing. In this App, you can spot and find those places and have an
        amazing experience.
      </p>
      <Link to="/login" className="PrimaryButton">
        Sign in
      </Link>
      <Link to="/signup" className="SecondaryButton">
        Create an account
      </Link>
    </div>
  );
};

export default StartPage;
