import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./LoginForm.module.scss";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
