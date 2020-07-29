import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      dummyusername: ["admin", "admin1"],
      dummypassword: ["password", "password"],
    };
  }
  componentDidMount() {
    localStorage.setItem("authkey", JSON.stringify(false));
  }
  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  checkUser = (e) => {
    e.preventDefault();
    if (this.state.username === "" && this.state.password === "") {
      window.alert("Username and Password can not be empty");
    } else if (this.state.username === "") {
      window.alert("Username can not be empty");
    } else if (this.state.password === "") {
      window.alert("Password can not be empty");
    } else {
      this.state.dummyusername.map((items) => {
        if (this.state.username === items) {
          this.state.dummypassword.map((items) => {
            if (this.state.password === items) {
              localStorage.setItem("authkey", JSON.stringify(true));
              return (window.location.href = "/dashboard");
            }
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <h3>Login Form</h3>
          </Col>
        </Row>
        <Row>
          <Form className="form-signin">
            <div className="form-label-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="username"
                className="form-control"
                required="required"
                autoFocus="true"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-label-group">
              <label htmlFor="inputPpassword">Password </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="form-control"
                required="required"
                autoFocus="true"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>

            <div className="form-label-group">
              <br></br>
              <button className="btn btn-success" onClick={this.checkUser}>
                Sign in
              </button>
              <Link className="btn btn-primary" to="/register">
                Sign Up
              </Link>
            </div>
          </Form>
        </Row>
      </div>
    );
  }
}
