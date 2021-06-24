import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <div className={styles.navigationWrap}>
    <div className={styles.navigationLogo}>줍</div>
    <nav role="navigation">
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link
            to="/events"
            activeStyle={{ color: "rgba(245, 222, 179, 0.6)" }}
          >
            Event
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link
            to="/airdrops/"
            activeStyle={{ color: "rgba(245, 222, 179, 0.6)" }}
          >
            AirDrop
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link
            to="/whitelists/"
            activeStyle={{ color: "rgba(245, 222, 179, 0.6)" }}
          >
            Whitelist
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
