import React from "react";
import styles from "./ChoosingUs.module.css";
import experience from "../../assets/home/end1.png";
import communication from "../../assets/home/cutting1.png";
import comfort from "../../assets/home/Proven1.png";

const ChoosingUs = () => {
  return (
    <div style={{ backgroundColor: "#fff1e5" }}>
      <div className="container overflow-hidden">
        <p
          data-aos="slide-right"
          data-aos-offset="220"
          className={styles.heading}
        >
          Top three the reason why you should choosing us.
        </p>
        <p data-aos="slide-left" className={styles.sub_text}>
          
        </p>
        <div className={`row ${styles.sub}`}>
          <div data-aos="fade-right" className="col-md-4">
            <img src={experience} alt="experience" />
            <p className={styles.logo_head}>End-to-End Expertise</p>
            <p className={styles.logo_text}>
              MPCL offers comprehensive IT solutions, from data center
              infrastructure and security to end-user computing. We cover the
              entire lifecycle of your IT setup, ensuring a seamless and
              efficient operation.
            </p>
          </div>

          <div data-aos="fade" className="col-md-4">
            <img src={communication} alt="experience" />
            <p className={styles.logo_head}>Cutting-Edge Technologies</p>
            <p className={styles.logo_text}>
              Stay ahead with MPCL as we embrace new technologies like AI and ML
              through our "Data Science Platform." Accelerate project timelines
              and enhance application performance with our innovative solutions.
            </p>
          </div>

          <div data-aos="fade-left" className="col-md-4">
            <img src={comfort} alt="experience" />
            <p className={styles.logo_head}>Proven Track Record</p>
            <p className={styles.logo_text}>
              AlWith over 50,000 end-user devices and 5,000 servers deployed
              nationwide, MPCL has a robust service framework, including
              large-scale data center asset management. Our stable employee base
              ensures continuity and excellence in service delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosingUs;
