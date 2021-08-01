import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOps, authSelectors } from "../../../redux/auth";

import avatar from "./avatar.png";
import styles from "./UserMenu.module.scss";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);

  const onLogout = useCallback(() => dispatch(authOps.logOut()), [dispatch]);

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
      <button className={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
