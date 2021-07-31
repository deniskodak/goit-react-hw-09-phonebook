import { connect } from 'react-redux';
import { authOps } from '../../../../redux/auth';
import SignUpForm from './SignUpForm';

const mapDispatchToProps = {
  onSignUp: authOps.signUp,
};

export default connect(null, mapDispatchToProps)(SignUpForm);
