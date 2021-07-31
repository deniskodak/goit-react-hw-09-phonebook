import Contact from './Contact';
import { connect } from 'react-redux';
import { phoneBookOps } from '../../../redux/contacts';

const mapDispatchToProps = dispatch => ({
  OnDelete: id => dispatch(phoneBookOps.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contact);
