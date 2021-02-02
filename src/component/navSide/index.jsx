import React from "react";
class NavSide extends React.Component {
  render() {
    return (
      <div className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li>
              <a className="active-menu" href="index.html" one-link-mark="yes">
                <i className="fa fa-dashboard"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="ui-elements.html" one-link-mark="yes">
                <i className="fa fa-desktop"></i> UI Elements
              </a>
            </li>
            <li>
              <a href="chart.html" one-link-mark="yes">
                <i className="fa fa-bar-chart-o"></i> Charts
              </a>
            </li>
            <li>
              <a href="tab-panel.html" one-link-mark="yes">
                <i className="fa fa-qrcode"></i> Tabs &amp; Panels
              </a>
            </li>

            <li>
              <a href="table.html" one-link-mark="yes">
                <i className="fa fa-table"></i> Responsive Tables
              </a>
            </li>
            <li>
              <a href="form.html" one-link-mark="yes">
                <i className="fa fa-edit"></i> Forms{" "}
              </a>
            </li>

            <li>
              <a href="#" one-link-mark="yes">
                <i className="fa fa-sitemap"></i> Multi-Level Dropdown
                <span className="fa arrow"></span>
              </a>
              <ul className="nav nav-second-level collapse">
                <li>
                  <a href="#" one-link-mark="yes">
                    Second Level Link
                  </a>
                </li>
                <li>
                  <a href="#" one-link-mark="yes">
                    Second Level Link
                  </a>
                </li>
                <li>
                  <a href="#" one-link-mark="yes">
                    Second Level Link<span className="fa arrow"></span>
                  </a>
                  <ul className="nav nav-third-level collapse">
                    <li>
                      <a href="#" one-link-mark="yes">
                        Third Level Link
                      </a>
                    </li>
                    <li>
                      <a href="#" one-link-mark="yes">
                        Third Level Link
                      </a>
                    </li>
                    <li>
                      <a href="#" one-link-mark="yes">
                        Third Level Link
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="empty.html" one-link-mark="yes">
                <i className="fa fa-fw fa-file"></i> Empty Page
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavSide;