import React from "react";
import styles from "./Footer.module.css";
import fb from "../../assets/home/facebook.png";
import linkdin from "../../assets/home/linkdin.png";
import insta from "../../assets/home/insta.png";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#2b2b2b",
          paddingTop: "89px",
          paddingBottom: "90px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.logo}>MPCL</p>
              <p className={styles.text}>
                
              </p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <div className={styles.social_logo}>
                <img src={fb} alt="fb" className={styles.img} />
                <img src={linkdin} alt="in" className={styles.img} />
                <img src={insta} alt="insta" className={styles.img} />
              </div>
            </div>

            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.head}>Services</p>
              <p className={styles.text}>
                
              </p>
              <p className={styles.text}>Our Services</p>
              <p className={styles.text}>1</p>
              
            </div>

            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.head}>Head Office</p>
              <p className={styles.text}>
              Mumbai (H.O.) 17/18, Navketan Estate, Opp. ONIDA, Mahakali Caves
                Rd. Andheri (E), Mumbai – 400 093.
              </p>
              <p className={styles.text}>deanna.curtis@example.com</p>
              <p className={styles.text}>022 40956301</p>
            </div>

            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.head}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#2b2b2b", borderTop: "solid 1px #707070" }}
      >
        <p className={styles.bottom}>Copyright © 2020. All right reserved</p>
      </div>
    </>
  );
};
export default Footer;
