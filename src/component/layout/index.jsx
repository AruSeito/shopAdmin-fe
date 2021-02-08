import React from "react";
import NavSide from "Component/navSide/index.jsx";
import NavTop from "Component/navTop/index.jsx";

import "./theme.css";
class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="wrapper">
        <NavTop {...this.props} />
        <NavSide {...this.props} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
