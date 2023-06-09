import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.sass';
import CAROUSEL_CONSTANTS from '../../constants/carouselConstants';
import SliderBar from '../SlideBar/SlideBar';
import CONSTANTS from '../../constants/constants';

const HomeHeader = () => {
  const [index, setIndex] = useState(0);
  const [styleName, setStyle] = useState(styles.headline__static);
  const timeoutRef = useRef(null);

  const refreshingText =
    CONSTANTS.HEADER_ANIMATION_TEXT[
      index % CONSTANTS.HEADER_ANIMATION_TEXT.length
    ];

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
      setStyle(styles.headline__isloading);
    }, 3000);
    return () => {
      setStyle(styles.headline__static);
      clearInterval(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className={styles.headerBar}>
        <div className={styles.headline}>
          <span>Find the Perfect Name for</span>
          <span className={styleName}>{refreshingText}</span>
        </div>
        <p>
          Launch a naming contest to engage hundreds of naming experts as you’re
          guided through our agency-level naming process. Or, explore our
          hand-picked collection of premium names available for immediate
          purchase
        </p>
        <div className={styles.button}>
          <Link className={styles.button__link} to="/dashboard">
            DASHBOARD
          </Link>
        </div>
      </div>
      <div className={styles.greyContainer}>
        <SliderBar
          images={CAROUSEL_CONSTANTS.mainSliderImages}
          carouselType={CAROUSEL_CONSTANTS.MAIN_SLIDER}
        />
      </div>
    </>
  );
};

export default HomeHeader;
