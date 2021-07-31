import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserMenu.module.scss';

const UserMenu = ({ avatar, user, onLogout }) => {
  return (
    <div className={styles.container}>
      <img
        src={avatar}
        alt="user avatar"
        width="32"
        className={styles.avatar}
      />
      <span className={styles.greetings}>Glad to see you,</span>
      <span className={styles.name}>{user.name}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLogout()}
      >
        Logout
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
