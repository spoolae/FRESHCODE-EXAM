import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import Logo from '../Logo/Logo';

const AuthenticationHeader = ({ authMode }) => {
  const linkText = authMode === CONSTANTS.AUTH_MODE.LOGIN ? 'Signup' : 'Login';
  const linkTo =
    authMode === CONSTANTS.AUTH_MODE.LOGIN ? '/registration' : '/login';

  return (
    <div className={styles.headerSignUpPage}>
      <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
      <div className={styles.linkLoginContainer}>
        <Link to={linkTo} style={{ textDecoration: 'none' }}>
          <span>{linkText}</span>
        </Link>
      </div>
    </div>
  );
};

export default AuthenticationHeader;
