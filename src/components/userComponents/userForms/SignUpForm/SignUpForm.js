import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./SignUpForm.module.scss";

const SignUpForm = ({ onSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
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
      name,
      email,
      password,
    };

    onSignUp(user);

    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        {" "}
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          autoComplete="off"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
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
        Sign Up!
      </button>
    </form>
  );
};

SignUpForm.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

export default SignUpForm;
