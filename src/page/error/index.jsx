import React from "react";

import PageHeader from "Component/PageHeader/index.jsx";
import { Link } from "react-router-dom";

class Error extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        <PageHeader title="Error Page" />
        <p>
          Could not find out this page，
          <Link to="/">please click me back out！</Link>
        </p>
      </div>
    );
  }
}

export default Error;
