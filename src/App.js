import React, { Suspense, lazy, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.scss";
import { Route, Switch, Redirect } from "react-router";
import { authOps } from "./redux/auth";

import AppBar from "./components/commonComponents/AppBar";
import PrivateRoute from "./components/commonComponents/PrivateRoute";
import PublicRoute from "./components/commonComponents/PublicRoute";
import LoaderWithContainer from "./components/commonComponents/LoaderWithContaner";

const HomeView = lazy(() => import("./Views/HomeVIew"));
const ContactsView = lazy(() => import("./Views/ContactsView"));
const SignUpView = lazy(() => import("./Views/SignUpView"));
const LoginView = lazy(() => import("./Views/LoginView"));

const App = ({ onGetCurrentUser }) => {
  useEffect(() => onGetCurrentUser(), [onGetCurrentUser]);
  return (
    <>
      <AppBar />
      <Suspense fallback={<LoaderWithContainer />}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/"
            component={SignUpView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

App.propTypes = {
  onGetCurrentUser: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  onGetCurrentUser: authOps.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
