import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => this.setState({ data: [response.data] }));
    localStorage.setItem("authkey", JSON.stringify(false));
  }

  dataList() {
    return this.state.data.map((item) => (
      <tr>
        <td>{item.id}</td>
        <td>{item.userId}</td>
        <td>{item.title}</td>
        <td>{String(item.completed)}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="container">
        <h1>Dashboard</h1>
        <Link className="btn btn-secondary" to="/" style={{ float: "right" }}>
          Sign Out
        </Link>
        <div className="container">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <td>id</td>
                <td>UserId</td>
                <td>Title</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>{this.dataList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
