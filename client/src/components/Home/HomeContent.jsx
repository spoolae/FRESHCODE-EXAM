import React from 'react';

import styles from './Home.module.sass';
import HomeHeader from './HomeHeader';
import WhySquadhelp from './WhySquadhelp';
import NamesForSale from './NamesForSale';
import CustomersSay from './CustomersSay';

const HomeContent = () => {
  return (
    <div className={styles.container}>
      <HomeHeader />
      <WhySquadhelp />
      <NamesForSale />
      <CustomersSay />
    </div>
  );
};

export default HomeContent;
