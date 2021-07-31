import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.css';

const Contact = ({ OnDelete, contact: { name, number, id } }) => {
  return (
    <li className={styles.item}>
      {name}: {number}
      <button
        className={styles.button}
        type="button"
        onClick={() => OnDelete(id)}
      >
        X
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.isRequired,
  }),
  OnDelete: PropTypes.func.isRequired,
};

export default Contact;
