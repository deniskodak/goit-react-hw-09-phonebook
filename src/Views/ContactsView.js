import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { phoneBookOps } from "../redux/contacts";
import { phoneBookSelectors } from "../redux/contacts";

import Form from "../components/contactsComponents/Form";
import Filter from "../components/contactsComponents/Filter";
import ContactsList from "../components/contactsComponents/Contacts";

const ContactsView = ({ fetchContacts, contacts }) => {
  useEffect(() => fetchContacts(), [fetchContacts]);

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
};

ContactsView.propTypes = {
  contacts: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: phoneBookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  fetchContacts: phoneBookOps.getContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
