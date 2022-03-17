import Link from "next/link";

import React from "react";

import styles from "./../styles/404.module.css";

const NotFound = () => {
  return (
    <div className={styles["not-found-container"]}>
      <div className={styles["header-container"]}>
        <h1 className={styles.status}>404</h1>
        <h1 className={styles["status-text"]}>Page Not Found</h1>
      </div>
      <div className={styles.redirection}>
        <h2>
          Lost? You may want to go to &nbsp;
          <Link href="/">
            <a className={styles.link}>Home Page</a>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
