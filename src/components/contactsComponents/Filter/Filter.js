import React from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

import { useState } from "react";

const Filter = ({ filterContacts }) => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    filterContacts(e.target.value);

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
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};
export default Filter;
