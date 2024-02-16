import React from "react";
import styles from "./AboutUsHome.module.css";
import img1 from "../../assets/home/about us mpcl 3.jpg";
import img2 from "../../assets/home/aboutmpcl2.jpg";
import img3 from "../../assets/home/about us mpcl 3.jpg";

const AboutUsHome = () => {
  return (
    <>
      <div className={`container ${styles.contain}`}>
        <div className="row overflow-hidden">
          <div className="col-md-6">
            <p data-aos="slide-right" className={styles.head}>
              ABOUT MPCL
            </p>
            <p data-aos="slide-left" className={styles.heading}>
            Empowering IT Excellence: MPCL - Your Trusted Partner for Innovative IT Solutions and Services.
            </p>
            <div data-aos="zoom-in">
              <p className={styles.content}>
                Micropoint Computers Pvt. Ltd. (MPCL) is one of India’s leading
                IT Infrastructure Solutions and Services Company. We are an ISO
                9001:2015 certified with more than 3 decades of presence. We are
                a team of 700+ skilled personnel. The management team carries a
                combined average technical experience of 20+ years.
              </p>
            </div>
            <div data-aos="zoom-in" style={{ textAlign: "left" }}>
              <button className={`btn custom_btn ${styles.btn}`}>
                {" "}
                Click here to know more
              </button>
            </div>
          </div>

          <div className="col-md-6 mt-5 overflow-hidden">
            <div className={styles.row}>
              <div className={`${styles.column} ${styles.col1}`}>
                <img data-aos="zoom-in-right" src={img1} alt="" />
              </div>
              <div className={styles.column}>
                <img
                  data-aos="zoom-in-left"
                  src={img2}
                  style={{ width: "110%" }}
                  alt=""
                />
                <img data-aos="zoom-in-left" src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsHome;
