import ContactList from './ContactsList';

import { connect } from 'react-redux';
import { phoneBookSelectors } from '../../../redux/contacts';

const mstp = state => ({
  contacts: phoneBookSelectors.getFilteredContacts(state),
  isLoading: phoneBookSelectors.getIsLoading(state),
  isError: phoneBookSelectors.getErrorMessage(state),
});

export default connect(mstp)(ContactList);
