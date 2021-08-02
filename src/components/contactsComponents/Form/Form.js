import React, { useCallback, useState } from "react";

import styles from "./Form.module.css";

import { createRandomContact } from "./randomContact";
import { useDispatch, useSelector } from "react-redux";
import { phoneBookOps, phoneBookSelectors } from "../../../redux/contacts";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(phoneBookSelectors.getContacts);
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const addContact = useCallback(
    (name, phone) => dispatch(phoneBookOps.addContact(name, phone)),
    [dispatch]
  );

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setContactName(e.target.value);
        break;
      case "number":
        setContactNumber(e.target.value);
        break;
      default:
        console.alert("Oopps, something went wront");
    }
  };

  const findContact = (array, name) => {
    return array.some(
      (oldContact) => oldContact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const reset = () => {
    setContactName("");
    setContactNumber("");
  };

  const createOwnContact = (e) => {
    e.preventDefault();

    const existContact = findContact(contacts, contactName);

    existContact
      ? alert(`${contactName} is already in contacts`)
      : addContact(contactName, contactNumber);
    reset();
  };

  const addRandomContact = () => {
    const { fullName, phoneNumber } = createRandomContact();
    addContact(fullName, phoneNumber);
  };

  return (
    <form className={styles.form} onSubmit={createOwnContact}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={contactName}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        Phone number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={contactNumber}
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
      </label>
      <div className={styles.controlls}>
        <button className={styles.button} type="submit">
          Add contact
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={addRandomContact}
        >
          Add random contact
        </button>
      </div>
    </form>
  );
}
