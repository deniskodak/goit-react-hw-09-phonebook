import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Navigation.module.scss';

const Navigation = ({ isAuthenticated }) => (
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
    {isAuthenticated && (
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

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Navigation;
