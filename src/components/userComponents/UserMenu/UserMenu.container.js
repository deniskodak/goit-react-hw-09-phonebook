import { connect } from 'react-redux';
import { authOps, authSelectors } from '../../../redux/auth';
import avatar from './avatar.png';
import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  avatar,
  user: authSelectors.getUser(state),
});

const mapDispatchToProps = {
  onLogout: authOps.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
