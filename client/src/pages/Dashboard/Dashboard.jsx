import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CONSTANTS from '../../constants/constants';
import CustomerDashboard from '../../components/CustomerDashboard/CustomerDashboard';
import CreatorDashboard from '../../components/CreatorDashboard/CreatorDashboard';
import Header from '../../components/Header/Header';

const Dashboard = (props) => {
  const { role, history } = props;

  if (role === CONSTANTS.CUSTOMER) {
    return (
      <div>
        <Header />
        <CustomerDashboard history={history} match={props.match} />
      </div>
    );
  } else if (role === CONSTANTS.CREATOR) {
    return (
      <div>
        <Header />
        <CreatorDashboard history={history} match={props.match} />
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

const mapStateToProps = (state) => state.userStore.data;

export default connect(mapStateToProps)(Dashboard);
