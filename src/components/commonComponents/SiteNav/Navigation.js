import React from "react";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../../redux/auth";

import styles from "./Navigation.module.scss";
import { useSelector } from "react-redux";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.isAuthenticated);
  return (
    <ul className={styles.nav_list}>
      <li className={styles.nav_item}>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.link_active}
        >
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            to="/contacts"
            className={styles.link}
            activeClassName={styles.link_active}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
}
