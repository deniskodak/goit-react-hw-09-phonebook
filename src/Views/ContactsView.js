import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { phoneBookOps } from "../redux/contacts";
import { phoneBookSelectors } from "../redux/contacts";

import Form from "../components/contactsComponents/Form";
import Filter from "../components/contactsComponents/Filter";
import ContactsList from "../components/contactsComponents/Contacts";

export default function ContactsView() {
  const dispatch = useDispatch();
  const contacts = useSelector(phoneBookSelectors.getContacts);

  useEffect(() => dispatch(phoneBookOps.getContacts()), [dispatch]);

  return (
    <div className="container">
      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="container-fade"
      >
        <section className="app-section">
          <h1 className="app-title">Phonebook</h1>
          <Form />
          {contacts.length > 0 && (
            <>
              <h2 className="app-title top-margin">Filter your contacts</h2>
              <Filter />
            </>
          )}
        </section>
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="container-next-fade"
      >
        <section className="app-section">
          <h2 className="app-title">Contacts</h2>
          <ContactsList />
        </section>
      </CSSTransition>
    </div>
  );
}
