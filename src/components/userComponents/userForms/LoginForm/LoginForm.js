import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authOps } from "../../../../redux/auth";

import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = useCallback(
    (user) => dispatch(authOps.login(user)),
    [dispatch]
  );

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        console.alert("Oops something went wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    onLogin(user);

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        {" "}
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          autoComplete="off"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        {" "}
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          autoComplete="off"
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
  );
}
