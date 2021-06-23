import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <div className={styles.navigationWrap}>
    <div className={styles.navigationLogo}>줍</div>
    <nav role="navigation">
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/Events">Event</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/airdrops/">AirDrop</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/Whitelist/">Whitelist</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/referral/">Referral</Link>
        </li>
      </ul>
    </nav>
  </div>
);
