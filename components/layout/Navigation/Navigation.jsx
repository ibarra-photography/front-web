import Link from "next/link";
import React, { Fragment } from "react";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.links}>
      <Link href="/">Home</Link>
      <Link href="/gallery">Gallery</Link>
    </div>
  );
};

export default Navigation;
