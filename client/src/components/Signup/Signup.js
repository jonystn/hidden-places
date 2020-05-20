import React, { Component } from "react";
import { signup } from "../../services/auth";
import { Link, Redirect } from "react-router-dom";
import "./Signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const mail = <FontAwesomeIcon icon={faEnvelope} style={{ color: "#00C4CC" }} />;
const lock = <FontAwesomeIcon icon={faLock} style={{ color: "#00C4CC" }} />;
const user = <FontAwesomeIcon icon={faUser} style={{ color: "#00C4CC" }} />;


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
              <input
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                required
              />
            </div>

            <div className="InputContainer">
              <i>{lock}</i>
              <label htmlFor="password"></label>
              <input
                placeholder="Password - Minimum 6 characters"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                id="password"
                required
              />
            </div>
            <div className="Message">
              &nbsp;
              {this.state.message && <span>{this.state.message}</span>}
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
