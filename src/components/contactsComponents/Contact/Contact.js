import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { phoneBookOps } from "../../../redux/contacts";

import styles from "./Contact.module.css";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const onDelete = useCallback(
    (id) => {
      dispatch(phoneBookOps.deleteContact(id));
    },
    [dispatch]
  );

  return (
    <li className={styles.item}>
      {name}: {number}
      <button
        className={styles.button}
        type="button"
        onClick={() => onDelete(id)}
      >
        X
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.isRequired,
  }),
};
