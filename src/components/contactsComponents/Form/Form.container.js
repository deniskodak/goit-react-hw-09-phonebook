import { connect } from 'react-redux';
import { phoneBookOps, phoneBookSelectors } from '../../../redux/contacts';
import ContactForm from './Form';

const mapStateToProps = state => ({
  contacts: phoneBookSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, phone) => dispatch(phoneBookOps.addContact(name, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
