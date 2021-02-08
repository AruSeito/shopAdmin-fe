import React from "react";
import { Link } from "react-router-dom";
import { userLogout } from "Service/user.jsx";

class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: window.localStorage.getItem("userInfo") || "",
    };
  }

  handleClickLogout() {
    userLogout().then(() => {
      window.localStorage.removeItem("userInfo");
      this.props.history.push("/login");
    });
  }
  render() {
    const { userInfo } = this.state;
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <b>Shop</b>Admin
          </Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-user fa-fw"></i>
              {userInfo ? (
                <span> Welcome,{JSON.parse(userInfo).username}</span>
              ) : (
                <span> Welcome</span>
              )}

              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li
                onClick={() => {
                  this.handleClickLogout();
                }}
              >
                <a href="javascript:;">
                  <i className="fa fa-sign-out fa-fw"></i> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavTop;
