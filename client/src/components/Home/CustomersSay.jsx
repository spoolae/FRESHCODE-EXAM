import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.sass';
import CAROUSEL_CONSTANTS from '../../constants/carouselConstants';
import SliderBar from '../SlideBar/SlideBar';

const CustomersSay = () => {
  return (
    <>
      <div className={styles.headerBar}>
        <h3>Names For Sale</h3>
        <p className={styles.blueUnderline}>
          Not interested in launching a contest? Purchase a name instantly from
          our hand-picked collection of premium names. Price includes a
          complimentary Trademark Report, a Domain name as well as a Logo design
        </p>
      </div>
      <SliderBar
        images={CAROUSEL_CONSTANTS.exampleSliderImages}
        carouselType={CAROUSEL_CONSTANTS.EXAMPLE_SLIDER}
      />
      <div className={styles.button}>
        <Link className={styles.button__link} to="/dashboard">
          DASHBOARD
        </Link>
      </div>
      <div className={styles.blueContainer}>
        <h2 className={styles.whiteUnderline}>What our customers say</h2>
        <SliderBar
          images={CAROUSEL_CONSTANTS.feedbackSliderImages}
          carouselType={CAROUSEL_CONSTANTS.FEEDBACK_SLIDER}
        />
      </div>
    </>
  );
};

export default CustomersSay;
