import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../SiteNav';
import AuthNav from '../AuthNav';
import UserMenu from '../../userComponents/UserMenu';

import styles from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Navigation />
      {!isAuthenticated ? <AuthNav /> : <UserMenu />}
    </div>
  </header>
);

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default AppBar;
