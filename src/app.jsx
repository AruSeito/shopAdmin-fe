import React from "react";
import ReactDom from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "Component/layout/index.jsx";
import Home from "Page/home/index.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Home} />
            <Route exact path="/category" component={Home} />
            <Route exact path="/order" component={Home} />
            <Route exact path="/user" component={Home} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#app"));
