import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../SiteNav/Navigation.module.scss';

const UserMenu = () => (
  <ul className={styles.nav_list}>
    <li className={styles.nav_item}>
      <NavLink
        exact
        to="/register"
        className={styles.link}
        activeClassName={styles.link_active}
      >
        Sign Up
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/login"
        className={styles.link}
        activeClassName={styles.link_active}
      >
        Login
      </NavLink>
    </li>
  </ul>
);

export default UserMenu;
