import React from "react";
import ReactDom from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import Layout from "Component/layout/index.jsx";
import Home from "Page/home/index.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#app"));
