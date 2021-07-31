import { connect } from 'react-redux';
import { phoneBookSelectors, phoneBookActions } from '../../../redux/contacts';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: phoneBookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  filterContacts: text => dispatch(phoneBookActions.filterContacts(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
