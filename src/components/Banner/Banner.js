// Banner.js

import React from "react";
import styles from './Banner.module.css';
import bgVid from '../../assets/home/mpclfinalbg.mp4';

const Banner = () => {

  
  return (
    <div className={styles.imgbox}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted id='video' className={styles.video}>
          <source src={bgVid} type='video/mp4'/>
          Video not supported
        </video>
      </div>
      <div className={`${styles.center} overflow-hidden`}>
        <div className={styles.text}>
          <h1 className={styles.title}>Your Title</h1>
          <p className={styles.subtitle}>Your subtitle</p>
          <button className={styles.btn}>Your Button</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
