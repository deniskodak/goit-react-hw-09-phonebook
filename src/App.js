import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

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

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOps.getCurrentUser()), [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<LoaderWithContainer />}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
          <PublicRoute path="/register" restricted redirectTo="/">
            <SignUpView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
