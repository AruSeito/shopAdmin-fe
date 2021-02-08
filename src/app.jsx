import React from "react";
import ReactDom from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "Component/layout/index.jsx";
import Home from "Page/home/index.jsx";
import Login from "Page/login/index.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={(props) => (
              <Layout {...props}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/product" component={Home} />
                  <Route path="/category" component={Home} />
                  <Route path="/order" component={Home} />
                  <Route path="/user" component={Home} />
                </Switch>
              </Layout>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#app"));
