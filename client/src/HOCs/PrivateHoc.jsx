import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SpinnerLoader from '../components/Spinner/Spinner';
import { getUser } from '../store/slices/userSlice';

const PrivateHoc = (Component, props) => {
  const Hoc = ({ data, isFetching, getUser, history, match }) => {
    useEffect(() => {
      if (!data) {
        getUser();
      }
    }, [data, getUser]);

    return (
      <>
        {isFetching ? (
          <SpinnerLoader />
        ) : (
          <Component history={history} match={match} {...props} />
        )}
      </>
    );
  };

  const mapStateToProps = (state) => state.userStore;

  const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Hoc);
};

export default PrivateHoc;
