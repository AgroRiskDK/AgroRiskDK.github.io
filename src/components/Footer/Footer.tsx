import { FOOTER_LINKS } from "@/constants/links";
import styles from "./footer.module.css";

import AgroRiskLogoTwo from "@/assets/imgs/logos/agrorisk-logo-2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <img src={AgroRiskLogoTwo} alt="logo" className={styles["footer-logo"]} />
      <div className={styles["footer-grid"]}>
        {FOOTER_LINKS.map((link) => {
          return (
            <div key={link.id} className={styles["footer-grid-item"]}>
              <span className={styles["footer-grid-item-title"]}>
                {link.title}
              </span>
              {link.items.map((item) => {
                return (
                  <Link
                    key={item.id}
                    target={item.title === "LinkedIn" ? "_blank" : "_self"}
                    to={item.to}
                    className={styles["footer-grid-item-link"]}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
