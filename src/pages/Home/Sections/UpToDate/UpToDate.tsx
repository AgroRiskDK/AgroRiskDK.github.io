import styles from "./up-to-date.module.css";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline";


const UpToDateSection = () => {


    return (
        <div className={styles["up-to-date-section"]}>
            <div className={styles["up-to-date-section-wrapper"]}>
                <div className={styles["up-to-date-section-content"]}>
          <span className={styles["up-to-date-section-content-title"]}>
            Contact us
          </span>
                    <p className={styles["up-to-date-section-content-subtitle"]}>
                        Get it touch with us for more information about our climate risk platform
                    </p>
                    <dl style={{display: 'flex', flexDirection: "row", gap: "24px"}}>
                        <div style={{display: 'flex', flexDirection: "row", alignItems: "center", gap: "4px"}}>
                            <PhoneIcon aria-hidden="true" style={{height: "16px", width: "16px",}}/>
                            <dd>
                                <a href="tel:+45 23 66 44 42" style={{
                                    fontWeight: "400",
                                    fontSize: "1.0625rem",
                                    color: "var(--black-opacity-80-color)"
                                }}>
                                    +45 23 66 44 42
                                </a>
                            </dd>
                        </div>
                        <div style={{display: 'flex', flexDirection: "row", alignItems: "center", gap: "4px"}}>
                            <EnvelopeIcon aria-hidden="true" style={{height: "20px", width: "20px"}}/>
                            <dd>
                                <a href="mailto:theodor@agrorisk.io" style={{
                                    fontWeight: "400",
                                    fontSize: "1.0625rem",
                                    color: "var(--black-opacity-80-color)"
                                }}>
                                    theodor@agrorisk.io
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default UpToDateSection;
