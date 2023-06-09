import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.sass';
import CONSTANTS from '../../constants/constants';
import Logo from '../Logo/Logo';

const RegistrationPageHeader = () => {
  return (
    <div className={styles.headerSignUpPage}>
      <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
      <div className={styles.linkLoginContainer}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationPageHeader;
