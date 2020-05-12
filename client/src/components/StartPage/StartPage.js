import React from "react";
import "./StartPage.scss";
import { Link } from "react-router-dom";

const StartPage = (props) => {
  return (
    <div className='StartPage'>
      <img src='../images/logo.svg' alt='Logo' />
      <h1>Welcome to Hidden Places!</h1>
      <p>Welcome to Hidden Places!</p>
      <div>
        <Link>Sing in</Link>
        <Link>Create an account</Link>
      </div>
    </div>
  );
};

export default StartPage;
