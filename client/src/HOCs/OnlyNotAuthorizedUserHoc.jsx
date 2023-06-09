import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SpinnerLoader from '../components/Spinner/Spinner';
import { getUser } from '../store/slices/userSlice';

const OnlyNotAuthorizedUserHoc = (Component) => {
  const HocForLoginSignUp = ({ data, isFetching, checkAuth, history }) => {
    useEffect(() => {
      checkAuth(history.replace);
    }, [checkAuth, history]);

    if (isFetching) {
      return <SpinnerLoader />;
    }
    if (!data) {
      return <Component history={history} />;
    }
    return null;
  };

  const mapStateToProps = (state) => state.userStore;

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: (replace) => dispatch(getUser(replace)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(HocForLoginSignUp);
};

export default OnlyNotAuthorizedUserHoc;
