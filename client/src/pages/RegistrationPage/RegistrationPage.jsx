import React from 'react';
import { connect } from 'react-redux';

import styles from './RegistrationPage.module.sass';
import CONSTANTS from '../../constants';
import { clearAuthError } from '../../store/slices/authSlice';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import AuthenticationHeader from '../../components/Header/AuthenticationHeader';
import RegistrationPageFooter from '../../components/RegistrationPageFooter/RegistrationPageFooter';

const RegistrationPage = (props) => {
  props.clearError();

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <AuthenticationHeader authMode={CONSTANTS.AUTH_MODE.REGISTER} />
        <RegistrationForm history={props.history} />
      </div>
      <RegistrationPageFooter />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearAuthError()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
