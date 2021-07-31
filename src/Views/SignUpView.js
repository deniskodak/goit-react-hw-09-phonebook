import React from 'react';
import SignUpForm from '../components/userComponents/userForms/SignUpForm';
import './views.scss';

const SignUpView = () => (
  <div className="views_container">
    <section className="app-section">
      <h2 className="views_title">Sign Up </h2>
      <SignUpForm />
    </section>
  </div>
);

export default SignUpView;
