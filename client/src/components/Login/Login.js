import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const mail = <FontAwesomeIcon icon={faEnvelope} style={{ color: "#9eb85d" }} />;
const lock = <FontAwesomeIcon icon={faLock} style={{ color: "#9eb85d" }} />;
const user = <FontAwesomeIcon icon={faUser} style={{ color: "#9eb85d" }} />;
const check = <FontAwesomeIcon icon={faCheck} style={{ color: "#d1d1cc" }} />;

function Login(props) {
  return (
    <div className="Signup">
      <h1>Nice to meet you! Log in now!</h1>

      <Link to="/signup">
        <span className="MediumText">Don’t you have an account yet?</span>{" "}
        <span className="Hyperlink">Sing up!</span>
      </Link>

      {/* <form onSubmit={this.handleSubmit}> */}
      <form className="Form" onSubmit="">
        <div className="InputContainer">
          <i>{mail}</i>
          <label htmlFor="username"></label>
          <input placeholder="E-mail" type="email" name="username" required />
        </div>

        <div className="InputContainer">
          <i>{lock}</i>
          <label htmlFor="password"></label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            // value={this.state.password}
            // onChange={this.handleChange}
            id="password"
            required
          />
        </div>

        <button type="submit" className="PrimaryButton">
          Sing in
        </button>
      </form>

      <span className="MediumText">or continue with</span>
      <img src="../images/facebook.svg" alt="Facebook logo" />
      <img src="../images/google.svg" alt="Google logo" />
    </div>
  );
}

export default Login;
