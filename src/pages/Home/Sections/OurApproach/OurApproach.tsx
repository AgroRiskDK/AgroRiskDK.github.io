import styles from "./our-approach.module.css";

import CicrleOne from "@/assets/imgs/decor/circle-1.svg";
import CicrleTwo from "@/assets/imgs/decor/circle-2.svg";

const OurApproachSection = () => {
  const Circle1 = () => {
    return (
      <svg
        width="263"
        height="343"
        viewBox="0 0 263 343"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M232.877 51.7655C262.154 -120.101 140.191 -284.164 -42.1455 -312.844C-224.482 -341.525 -394.516 -223.392 -423.793 -51.5257C-453.07 120.341 -331.107 284.404 -148.771 313.084C33.5655 341.765 203.6 223.632 232.877 51.7655Z"
          stroke="url(#paint0_linear_1_36)"
          strokeWidth="50"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_36"
            x1="-152.969"
            y1="337.729"
            x2="-46.5472"
            y2="-338.842"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#005F86" />
            <stop offset="1" stopColor="#CCDFE7" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  const Circle2 = () => {
    return (
      <svg
        width="160"
        height="353"
        viewBox="0 0 160 353"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M707.42 406.481C677.206 583.852 501.745 705.714 313.652 676.128C125.56 646.541 -0.309807 477.282 29.9049 299.911C60.1197 122.539 235.581 0.677782 423.673 30.2639C611.766 59.8499 737.635 229.109 707.42 406.481Z"
          stroke="url(#paint0_linear_1_35)"
          strokeWidth="50"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_35"
            x1="427.871"
            y1="5.61888"
            x2="318.308"
            y2="702.165"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#005F86" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <div className={styles["our-approach-section"]} id="aboutUs">
      <div className={styles["our-approach-section-content"]}>
        <img
          src={CicrleOne}
          alt="circle one"
          className={styles["our-approach-section-content-circle-one"]}
        />
        <img
          src={CicrleTwo}
          alt="circle two"
          className={styles["our-approach-section-content-circle-two"]}
        />
        <div className={styles["our-approach-section-content-heading"]}>
          <span
            className={styles["our-approach-section-content-heading-preview"]}
          >
            About Us
          </span>
          <div
            className={styles["our-approach-section-content-heading-content"]}
          >
            <span
              className={
                styles["our-approach-section-content-heading-content-title"]
              }
            >
              Developed by sustainability professionals
            </span>
            <div
              className={
                styles["our-approach-section-content-heading-content-subtitle"]
              }
            >
              <span
                className={
                  styles[
                    "our-approach-section-content-heading-content-subtitle-item"
                  ]
                }
              >
                AgroRisk is founded by Theodor Christensen, who has extensive
                experience in sustainable finance and ESG risk management.
              </span>
              <span
                className={
                  styles[
                    "our-approach-section-content-heading-content-subtitle-item"
                  ]
                }
              >
                He was responsible for sustainability and climate at the Danish
                Financial Supervisory Authority, where he oversaw both policy
                development and enforcement of the key EU legislations in the
                field. He has also been Head of Sustainability Compliance for
                Danske Bank with responsibility to ensure bank-wide compliance
                with sustainability-related legislation and commitments.
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className={styles["circle1"]}>
        <Circle1 />
      </span>
      <span className={styles["circle2"]}>
        <Circle2 />
      </span>
    </div>
  );
};

export default OurApproachSection;
