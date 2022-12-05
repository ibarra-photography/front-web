import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const router = useRouter();

  return (
    <div className={styles.links}>
      <Link
        className={
          router.pathname === "/" ? styles.activeLink : styles.inactiveLinks
        }
        href="/"
      >
        Home
      </Link>
      <Link
        className={
          router.pathname === "/gallery"
            ? styles.activeLink
            : styles.inactiveLinks
        }
        href="/gallery?page=1"
      >
        Gallery
      </Link>
      <Link
        className={
          router.pathname === "/uploads"
            ? styles.activeLink
            : styles.inactiveLinks
        }
        href="/uploads"
      >
        LogIn
      </Link>
    </div>
  );
};

export default Navigation;
