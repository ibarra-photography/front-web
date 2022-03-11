import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const router = useRouter();

  return (
    <div className={styles.links}>
      <Link href="/">
        <a
          className={
            router.pathname === "/" ? styles.activeLink : styles.inactiveLinks
          }
        >
          Home
        </a>
      </Link>
      <Link href="/gallery">
        <a
          className={
            router.pathname === "/gallery"
              ? styles.activeLink
              : styles.inactiveLinks
          }
        >
          Gallery
        </a>
      </Link>
    </div>
  );
};

export default Navigation;
