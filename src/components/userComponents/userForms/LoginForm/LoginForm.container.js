import { connect } from 'react-redux';
import { authOps } from '../../../../redux/auth';
import LoginForm from './LoginForm';

const mapDispatchToProps = {
  onLogin: authOps.login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
