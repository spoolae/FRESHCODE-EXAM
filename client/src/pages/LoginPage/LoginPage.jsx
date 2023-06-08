import React from 'react';
import { connect } from 'react-redux';

import styles from './LoginPage.module.sass';
import CONSTANTS from '../../constants';
import { clearAuthError } from '../../store/slices/authSlice';
import LoginForm from '../../components/LoginForm/LoginForm';
import AuthenticationHeader from '../../components/Header/AuthenticationHeader';

const LoginPage = (props) => (
  <div className={styles.mainContainer}>
    <div className={styles.loginContainer}>
      <AuthenticationHeader authMode={CONSTANTS.AUTH_MODE.LOGIN} />
      <div className={styles.loginFormContainer}>
        <LoginForm history={props.history} />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearAuthError()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
