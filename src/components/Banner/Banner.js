// Banner.js

import React from "react";
import styles from "./Banner.module.css";
import bgVid from "../../assets/home/mpclbgfn2.mp4";

const Banner = () => {
  return (
    <div className={styles.imgbox}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted id="video" className={styles.video}>
          <source src={bgVid} type="video/mp4" />
          Video not supported
        </video>
      </div>

      {/* Title and Subtitle */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>PERFORMANCE</h1>
        <p className={styles.subtitle}>
          We understand the exact IT MANAGEMENT need of any business house by
          knowing the usage pattern and resource needs.
        </p>
      </div>
    </div>
  );
};

export default Banner;
