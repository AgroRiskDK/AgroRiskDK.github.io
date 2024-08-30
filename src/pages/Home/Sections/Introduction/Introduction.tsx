import Navbar from "@/components/Navbar/Navbar";
import styles from "./introduction.module.css";
import Background from "@/assets/imgs/bg.jpeg";

const IntroductionSection = () => {
  return (
    <div className={styles["introduction-section"]}>
      <Navbar whiteLogo />
      <div className={styles["introduction-section-content"]}>
        <div className={styles["introduction-section-content-heading"]}>
          <span
            className={styles["introduction-section-content-heading-title"]}
          >
            Financial Climate Risk <br className={styles["breaker"]} />
            for Agriculture
          </span>
          <span
            className={styles["introduction-section-content-heading-subtitle"]}
          >
            Actionable risk insights for financial companies
          </span>
        </div>
      </div>
      <img src={Background} alt="" className={styles["bg-image"]} />
    </div>
  );
};

export default IntroductionSection;
