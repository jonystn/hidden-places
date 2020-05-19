import React, { Component } from "react";
import { signup } from "../../services/auth";
import { Link, Redirect } from "react-router-dom";
import "./Signup.scss";
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

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
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

    const { username, password, email } = this.state;

    signup(username, password, email).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          email: "",
          username: "",
          password: "",
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/explore");
      }
    });
  };

  render() {
    if (this.props.user) return <Redirect to="/explore" />;

    return (
      <div className="Signup">
        <div className="Container">
          <h1>Create your free account!</h1>

          <Link to="/login">
            <span className="MediumText">Do you already have an account?</span>{" "}
            <span className="Hyperlink">Sign in!</span>
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
              <i>{mail}</i>
              <label htmlFor="email"></label>
              <input placeholder="E-mail" type="email" name="email" required />
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
            <div>
              {this.state.message && <span>{this.state.message}</span>}
              <i>{check}</i>{" "}
              <span className="SmallText">Minimum 6 characters</span>
            </div>
            <button type="submit" className="PrimaryButton">
              Sing up
            </button>
          </form>

          <span className="MediumText">or continue with</span>
          <img src="../images/facebook.svg" alt="Facebook logo" />
          <img src="../images/google.svg" alt="Google logo" />
        </div>
      </div>
    );
  }
}
