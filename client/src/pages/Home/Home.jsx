import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import HomeContent from '../../components/Home/HomeContent';

const Home = (props) => {
  const { isFetching } = props;

  return (
    <div>
      <Header />
      {isFetching ? (
        <Spinner />
      ) : (
        <div>
          <HomeContent />
          <Footer />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isFetching } = state.userStore;
  return { isFetching };
};

export default connect(mapStateToProps, null)(Home);
