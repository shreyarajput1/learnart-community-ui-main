import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import {stockData}from "../../components/data";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
 
  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    {stockData.map((data) => {
    if (user_id === (data.user_id) && user_password === "123") {
      localStorage.setItem("token", user_id);
      this.setState({
        islogged: true
      });
    }
  })}
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/feed"/>;
    }
    return (
      <div className="container mt-5">
        <form onSubmit={this.login} className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="user_id"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
              />
              <input
                type="password"
                name="user_password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />
              <input type="submit" value="Login" />
              <a href="" >Create new Account</a>
            </div>
          </div>
          <p>user_id === "nick" && user_password === "123"</p>
        </form>
      </div>
    );
  }
}
export default Login;