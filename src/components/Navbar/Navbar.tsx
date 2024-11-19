import { NAVBAR_LINKS } from "@/constants/links";
import styles from "./navbar.module.css";

import AgroRiskLogoOne from "@/assets/imgs/logos/agrorisk-logo-1.svg";
import AgroRiskLogoTwo from "@/assets/imgs/logos/agrorisk-logo-2.svg";
import { Link, useLocation } from "react-router-dom";
import ButtonLink from "../Buttons/ButtonLink/ButtonLink";
import { FC, useEffect, useState } from "react";
import cn from "classnames";

type NavbarProps = {
  whiteLogo?: boolean;
};

const MenuIcon = () => {
  return (
    <svg
      width="23"
      height="14"
      viewBox="0 0 23 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1H21.5M1.5 7H21.5M1.5 13H21.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Navbar: FC<NavbarProps> = ({ whiteLogo }) => {
  const [isTalkToUsPage, setIsTalkToUsPage] = useState(false);
  // const [isInsightPage, setIsInsightPage] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsTalkToUsPage(["/talk-to-us"].includes(pathname));
    // setIsInsightPage(pathname.startsWith("/insights"));
  }, [pathname]);

  return (
    <div
      className={cn({
        [styles["navbar"]]: true,
        // [styles["navbar-insight"]]: isInsightPage,
      })}
    >
      <Link to="/" className={styles["mobile-provider"]}>
        <img
          src={!whiteLogo ? AgroRiskLogoTwo : AgroRiskLogoOne}
          alt="logo"
          className={styles["nav-logo"]}
        />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={styles["menu-icon"]}
        >
          <MenuIcon />
        </button>
      </Link>
      <div className={styles["navbar-links"]}>
        {NAVBAR_LINKS.map((link) => {
          return (
            <Link
              className={cn({
                [styles["navbar-links-item"]]: true,
                [styles["navbar-links-item-contrast"]]:
                  isTalkToUsPage || !whiteLogo,
              })}
              key={link.id}
              to={link.to}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className={styles["navbar-actions"]}>
        <ButtonLink
          to="https://app.agrorisk.io"
          target="_blank"
          title="Log In"
        />
      </div>
      <div
        className={styles["mobile-menu-container"]}
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
      >
        <button
          className={styles["mobile-menu-button"]}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className={styles["mobile-navbar"]}>
          {NAVBAR_LINKS.map((link) => {
            return (
              <Link
                className={styles["mobile-navbar-items"]}
                key={link.id}
                to={link.to}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
