import React from "react";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  renderer() {
    return (
      <div>
        {/* <TopNav />
      <NavBar /> */}
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
