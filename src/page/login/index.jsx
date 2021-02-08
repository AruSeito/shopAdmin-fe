import React from "react";
import { userLogin } from "Service/user.jsx";
import { getUrlParam, errorTips } from "Util/index.jsx";

import "./index.scss";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      redirect: getUrlParam("redirect") || "/",
    };
  }

  handleChangeInput(e) {
    const label = e.target.name;
    const value = e.target.value;
    this.setState({
      [label]: value,
    });
  }
  handleClickLogin() {
    const loginInfo = {
      username: this.state.userName,
      password: this.state.passWord,
    };
    userLogin(loginInfo).then(
      (res) => {
        window.localStorage.setItem("userInfo", JSON.stringify(res));
        this.props.history.push(this.state.redirect);
      },
      (errMsg) => {
        errorTips(errMsg);
      }
    );
  }
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">Welcome Login - SHOP ADMIM</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input
                  type="text"
                  name="userName"
                  className="form-control"
                  placeholder="UserName"
                  onChange={(e) => {
                    this.handleChangeInput(e);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="passWord"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => {
                    this.handleChangeInput(e);
                  }}
                />
              </div>
              <button
                className="btn btn-primary btn-block"
                onClick={() => {
                  this.handleClickLogin();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
