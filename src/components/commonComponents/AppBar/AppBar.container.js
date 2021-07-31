import { connect } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import AppBar from './AppBar';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
