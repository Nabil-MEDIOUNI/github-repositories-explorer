import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/404";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
