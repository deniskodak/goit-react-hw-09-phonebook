import React from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { phoneBookSelectors } from "../../../redux/contacts";

import Contact from "../Contact";

import contactAnimation from "./animation/contact.module.css";
import styles from "./ContactsList.module.css";

export default function ContactList() {
  const contacts = useSelector(phoneBookSelectors.getFilteredContacts);
  const isLoading = useSelector(phoneBookSelectors.getIsLoading);
  const isError = useSelector(phoneBookSelectors.getErrorMessage);

  return (
    <>
      {isLoading && (
        <Loader
          className={styles.loader}
          type="Puff"
          color="#e8c899"
          height={30}
          width={30}
        />
      )}

      {isError && <h2 className={styles.error}>{isError}</h2>}

      <TransitionGroup component="ul" className={styles.list}>
        {contacts.map((contact) => {
          const { id } = contact;
          return (
            <CSSTransition key={id} timeout={250} classNames={contactAnimation}>
              <Contact key={id} contact={contact} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
}
