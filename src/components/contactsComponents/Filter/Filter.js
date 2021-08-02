import React, { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Filter.module.css";

import { phoneBookActions } from "../../../redux/contacts";

export default function Filter() {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");

  const onFilterContacts = useCallback(
    (filterValue) => dispatch(phoneBookActions.filterContacts(filterValue)),
    [dispatch]
  );

  const handleChange = (e) => {
    onFilterContacts(e.target.value);

    setFilter(e.target.value);
  };

  return (
    <label className={styles.label}>
      {" "}
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        autoComplete="off"
        onChange={handleChange}
      />
    </label>
  );
}
