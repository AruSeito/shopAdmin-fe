import React from "react";
import ReactDom from "react-dom";

import { Router as BrowserRouter, Link, Switch } from "react-router-dom";

import Layout from "Component/layout/index.jsx";
import Home from "Page/home/index.jsx";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#app"));
