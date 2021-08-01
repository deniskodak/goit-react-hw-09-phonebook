import React, { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOps } from "../../../../redux/auth";
import styles from "./SignUpForm.module.scss";

export default function SignUpForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = useCallback(
    (user) => dispatch(authOps.signUp(user)),
    [dispatch]
  );

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
}
