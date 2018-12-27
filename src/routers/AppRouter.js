import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

// Page Imports
import LoginPage from "../components/pages/LoginPage";
import DashboardPage from "../components/pages/DashboardPage";
import NotFoundPage from "../components/pages/NotFoundPage";

// Routing
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// For having redirects outside router
export const history = createHistory();

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
