import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../services/auth";
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

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    login(username, password).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: "",
        });
      } else {
        // successfully logged in
        // update the state for the parent component
        this.props.setUser(data);
        this.props.history.push("/explore");
      }
    });
  };

  render() {
    if (this.props.user) return <Redirect to="/explore" />;
    return (
      <div className="Login">
        <h1>Nice to meet you! Log in now!</h1>

        <Link to="/signup">
          <span className="MediumText">Don’t you have an account yet?</span>{" "}
          <span className="Hyperlink">Sing up!</span>
        </Link>

        <form className="Form" onSubmit={this.handleSubmit}>
          <div className="InputContainer">
            <i>{user}</i>
            <label htmlFor="username"></label>
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
              autocomplete="off"
              required
            />
          </div>

          <div className="InputContainer">
            <i>{lock}</i>
            <label htmlFor="password"></label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              required
            />
          </div>

          <button type="submit" className="PrimaryButton">
            Sing in
          </button>
          {this.state.message && (
            <span variant="danger">{this.state.message}</span>
          )}
        </form>

        <span className="MediumText">or continue with</span>
        <img src="../images/facebook.svg" alt="Facebook logo" />
        <img src="../images/google.svg" alt="Google logo" />
      </div>
    );
  }
}
