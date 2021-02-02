import React from "react";

import { Link, NavLink } from "react-router-dom";
class NavSide extends React.Component {
  render() {
    return (
      <div className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li>
              <NavLink exact activeClassName="active-menu" to="/">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="active">
              <Link to="/product">
                <i className="fa fa-sitemap"></i>
                <span>product</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/product">
                    Product management
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-menu" to="/category">
                    Category management
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/order">
                <i className="fa fa-sitemap"></i>
                <span>Order</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/order">
                    Order management
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/user">
                <i className="fa fa-sitemap"></i>
                <span>User</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/user">
                    User management
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavSide;
