import React from "react";
import { authSelectors } from "../../../redux/auth";

import Navigation from "../SiteNav";
import AuthNav from "../AuthNav";
import UserMenu from "../../userComponents/UserMenu";

import styles from "./AppBar.module.scss";
import { useSelector } from "react-redux";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.isAuthenticated);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </div>
    </header>
  );
}
