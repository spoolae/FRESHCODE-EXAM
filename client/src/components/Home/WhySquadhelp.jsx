import React from 'react';

import styles from './Home.module.sass';
import CONSTANTS from '../../constants';

const WhySquadhelp = () => {
  return (
    <>
      <div className={styles.container__description}>
        <h2 className={styles.blueUnderline}>Why Squadhelp?</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}more-benifits-world-icon.png`}
              alt="globe"
            />
            <h3>Largest Naming Community</h3>
            <p>
              Our unique approach allows you to receive an unmatched breadth of
              business name ideas from world's largest community of naming
              experts. With 75,000+ creatives and 15,000+ successful naming
              projects, Squadhelp is by far the largest naming platform across
              the globe .
            </p>
          </div>
          <div className={styles.card}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}more-benifits-high-quality-icon.png`}
              alt="desktop"
            />
            <h3>High Quality & Collaboration</h3>
            <p>
              Using an advanced Quality Scoring Algorithm and Machine Learning,
              we ensure that you receive more ideas from our top-quality
              creatives, and Gamification best practices ensure two-way
              communication throughout your contest.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}more-benifits-trademark-icon.png`}
              alt="cards"
            />
            <h3>Agency-Level Features</h3>
            <p>
              Squadhelp's high end Audience Testing service allows you to poll
              your target demographics to get unbiased feedback on your favorite
              names. Also receive Trademark support from our team of Licensed
              Trademark Attorneys, so you can pick your name with confidence.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.greyContainer}>
        <div className={styles.adv}>
          <div className={styles.images}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/Forbes-inactive.png`}
              alt="forbes"
            />
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/Forbes-active.png`}
              alt="forbes"
            />
          </div>
          <div className={styles.images}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/the_next_web_inactive.png`}
              alt="web"
            />
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/the_next_web_active.png`}
              alt="web"
            />
          </div>
          <div className={styles.images}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/mashable-inactive.png`}
              alt="mashable"
            />
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/mashable-active.png`}
              alt="mashable"
            />
          </div>
        </div>
        <div className={styles.stats}>
          <div>
            <p>119,525</p>
            <span>Creatives</span>
          </div>
          <div>
            <p>21,875</p>
            <span>Customers</span>
          </div>
          <div>
            <p>85</p>
            <span>Industries</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySquadhelp;
