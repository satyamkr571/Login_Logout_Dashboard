import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordmatched: false,
    };
  }
  registrationdon = (e) => {
    if (this.state.passwordmatched === true) {
      return (
        localStorage.getItem("username", this.state.username),
        localStorage.setItem("password", this.state.password)
      );
    } else {
      window.alert("Password doesn't matched");
    }
  };
  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onReChangePassword = (e) => {
    if (this.state.password === e.target.value) {
      return this.setState({ passwordmatched: true });
    }
  };
  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <h3>Registration Form</h3>
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
                id="password2"
                placeholder="password"
                className="form-control"
                required="required"
                autoFocus="true"
                value={this.state.password}
                onChange={this.onChangePassword}
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
                onChange={this.onReChangePassword}
              />
            </div>

            <div className="form-label-group">
              <br></br>
              <button
                className="btn btn-primary"
                onClick={this.registrationdon}
              >
                Sign Up
              </button>
              <Link className="btn btn-secondary" to="/">
                Cancel
              </Link>
            </div>
          </Form>
        </Row>
      </div>
    );
  }
}
